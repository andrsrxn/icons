import { IconCheck, IconCopy, IconX } from '@andrsrxn/icons'
import type { BaseUIEvent } from '@base-ui/react'
import { type ComponentProps, type MouseEvent, useEffect, useState } from 'react'
import { useCopyToClipboard } from 'react-use'
import { Button } from '@/components/ui/button'

const COPIED_TIMEOUT = 1000

export const ButtonCopy = ({
  value,
  children,
  onClick,
  ...props
}: ComponentProps<typeof Button> & { value: string }) => {
  const [{ error }, copyToClipboard] = useCopyToClipboard()
  const [isCopied, setIsCopied] = useState(false)

  const copyValue = (e: BaseUIEvent<MouseEvent<HTMLButtonElement>>) => {
    if (value) {
      copyToClipboard(value)
    }
    setIsCopied(true)

    onClick?.(e)
  }

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false)
      }, COPIED_TIMEOUT)
      return () => clearTimeout(timeout)
    }
  }, [isCopied])

  return (
    <Button {...props} onClick={copyValue}>
      {error ? (
        <IconX className='animate-in fade-in size-4' />
      ) : isCopied ? (
        <IconCheck className='animate-in fade-in size-4' />
      ) : (
        <IconCopy className='animate-in fade-in size-4' />
      )}
      {children}
    </Button>
  )
}
