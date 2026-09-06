'use client'

import { IconReload, IconWarningCircle } from '@andrsrxn/icons'

export default function ErrorPage({
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  return (
    <div className='flex h-dvh w-full items-center justify-center'>
      <article>
        <div className='flex flex-col justify-center items-center gap-3'>
          <div className='bg-card shadow-sm border text-destructive size-12 rounded-lg flex items-center justify-center'>
            <IconWarningCircle className='size-7' />
          </div>
          <h1 className='text-4xl font-bold text-center text-balance'>Critical error</h1>
          <p className='max-w-xs text-center text-pretty text-muted-foreground'>
            Something went wrong. Please try again later.
          </p>
        </div>
        <div className='mt-6 flex justify-center'>
          <button
            type='button'
            onClick={retry}
            className='flex bg-primary text-primary-foreground px-3 py-1 rounded-lg items-center gap-2 cursor-pointer hover:bg-primary/80 active:scale-98 transition'>
            Retry <IconReload className='size-4' />
          </button>
        </div>
      </article>
    </div>
  )
}
