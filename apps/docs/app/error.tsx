'use client'

import { IconReload, IconWarningCircle } from '@andrsrxn/icons'
import { Button } from '@/components/ui/button'

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
          <Button type='button' onClick={retry}>
            <IconReload className='size-4' />
            Retry
          </Button>
        </div>
      </article>
    </div>
  )
}
