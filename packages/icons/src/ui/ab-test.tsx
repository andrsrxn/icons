import type { Icon } from './types'

export const IconAbTest: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-ab-test'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M12.01 3.02v18.53' stroke='currentColor' />
      <path
        d='m1.7 16.73 1.61-5.45h0c.8-2.68 1.19-4.02 1.92-4.01.74 0 1.1 1.36 1.82 4.06l1.44 5.4'
        stroke='currentColor'
      />
      <path
        d='M17.42 7.13h1.51c1.23 0 2.22.99 2.22 2.21 0 1.23-.75 2.22-2.74 2.22h.83a2.59 2.59 0 1 1 0 5.17h-1.7m.04 0c-.72 0-1.08 0-1.33-.18a1 1 0 0 1-.25-.24c-.17-.25-.17-.61-.17-1.33v-6.1c0-.72 0-1.08.17-1.33q.1-.15.25-.24c.25-.18.6-.18 1.33-.18'
        stroke='currentColor'
      />
      <path d='M2.98 13.1h4.37' stroke='currentColor' />
    </svg>
  )
}
