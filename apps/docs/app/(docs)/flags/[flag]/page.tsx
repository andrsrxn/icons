import { IconChevronLeft } from '@andrsrxn/icons'
import Link from 'next/link'
import { IconSection } from '@/components/sections/icon'

export const dynamic = 'force-dynamic'

export default async function FlagsPage({ params }: { params: Promise<{ flag: string }> }) {
  const { flag: iconName } = await params

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
