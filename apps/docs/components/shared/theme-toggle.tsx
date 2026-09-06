/** biome-ignore-all lint/performance/noJsxPropsBind: unneccessary */
'use client'

import { IconMoon, IconSun } from '@andrsrxn/icons'
import { useTheme } from '@teispace/next-themes'
import type { ComponentProps } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export const ThemeToggle = ({
  className,
  ...props
}: ComponentProps<typeof DropdownMenu> & { className?: string }) => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger
        className={cn('', className)}
        render={
          <Button aria-label='Toggle theme' variant='outline' size='sm'>
            <IconSun className='dark:hidden' />
            <IconMoon className='hidden dark:block' />
            Change theme
          </Button>
        }
      />
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
