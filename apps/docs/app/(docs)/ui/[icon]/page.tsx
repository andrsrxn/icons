import { IconChevronLeft } from '@andrsrxn/icons'
import rawCatalog from '@andrsrxn/raw-icons/catalog.json'
import type { IconCatalog } from '@andrsrxn/raw-icons/types'
import Link from 'next/link'
import { IconSection } from '@/components/sections/icon'
import { isUIIcon } from '@/lib/utils/icons'

const catalog = rawCatalog as IconCatalog

// biome-ignore lint/suspicious/useAwait: nextjs api
export async function generateStaticParams() {
  return catalog.filter(icon => isUIIcon(icon)).map(icon => ({ icon: icon.name }))
}

export default async function IconPage({ params }: { params: Promise<{ icon: string }> }) {
  const { icon: iconName } = await params

  return (
    <div className='grid gap-6 py-10 wrapper max-w-xl lg:max-w-4xl'>
      <Link
        href='/'
        prefetch={false}
        className='text-primary w-fit leading-none hover:underline flex items-center gap-1 decoration-1 underline-offset-2'>
        <IconChevronLeft className='size-4' />
        Back to icons
      </Link>

      <IconSection iconName={iconName} />
    </div>
  )
}
