import { IconChevronRight, IconHelp } from '@andrsrxn/icons'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex bg-dotted dark:bg-dotted-dark h-dvh w-full items-center justify-center'>
      <article>
        <div className='flex flex-col justify-center items-center gap-3'>
          <div className='bg-card shadow-sm border size-12 rounded-lg flex items-center justify-center'>
            <IconHelp className='size-7' />
          </div>
          <h1 className='text-4xl font-bold text-center text-balance'>Page not found</h1>
          <p className='max-w-xs text-center text-pretty text-muted-foreground'>
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <div className='mt-6 flex justify-center'>
          <Link
            href='/'
            className='flex items-center gap-1 hover:underline decoration-1 underline-offset-2 text-primary'>
            Go to Home <IconChevronRight className='size-4' />
          </Link>
        </div>
      </article>
    </div>
  )
}
