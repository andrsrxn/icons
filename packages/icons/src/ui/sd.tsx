import type { Icon } from './types'

export const IconSd: Icon = ({
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
      data-slot='icon-ui-sd'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
      <path
        d='M10.35 8.32a4.6 4.6 0 0 0-3.14-1.3c-1.5 0-3.14.83-3.14 2.6 0 3.78 6.28.76 6.28 4.6 0 1.8-1.6 2.77-3.14 2.77-1.53 0-2.57-.49-3.27-1.54'
        stroke='currentColor'
      />
      <path
        d='M13.53 16.06V7.94c0-.4 0-.6.14-.75s.32-.16.7-.17c1.84-.07 6.02.29 6.02 4.98s-4.18 5.05-6.02 4.98c-.38-.01-.56-.02-.7-.17-.14-.14-.14-.35-.14-.75'
        stroke='currentColor'
      />
    </svg>
  )
}
