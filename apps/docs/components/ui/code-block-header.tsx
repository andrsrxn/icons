'use client'

import { ButtonCopy } from '@/components/shared/button-copy'

interface CodeBlockHeaderProps {
  code: string
  filename?: string
}

export function CodeBlockHeader({ code, filename }: CodeBlockHeaderProps) {
  return (
    <div className='flex dark text-foreground pl-4 pr-1 py-0.5 bg-card items-center justify-between'>
      {filename && <span className='font-mono text-muted-foreground text-sm'>{filename}</span>}

      <ButtonCopy variant='ghost' size='icon-sm' value={code} />
    </div>
  )
}
