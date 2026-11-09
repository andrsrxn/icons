import type { Icon } from './types'

export const IconHd: Icon = ({
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
      data-slot='icon-ui-hd'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
      <path
        d='M13.73 16.06V7.94c0-.4 0-.6.14-.75s.33-.16.71-.17c1.84-.07 6.02.29 6.02 4.98s-4.18 5.05-6.02 4.98c-.38-.01-.57-.02-.7-.17-.15-.14-.15-.35-.15-.75'
        stroke='currentColor'
      />
      <path d='M10.16 7.01V17' stroke='currentColor' />
      <path d='M4.27 7.01V17' stroke='currentColor' />
      <path d='M4.27 12h5.89' stroke='currentColor' />
    </svg>
  )
}
