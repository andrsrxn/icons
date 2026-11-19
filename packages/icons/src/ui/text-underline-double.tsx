import type { Icon } from './types'

export const IconTextUnderlineDouble: Icon = ({
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
      data-slot='icon-ui-text-underline-double'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M20 21.6H4' stroke='currentColor' />
      <path d='M20 18.24H4' stroke='currentColor' />
      <path
        d='M7.08 2.36v6c0 1.59 0 6.36 4.86 6.36 4.98 0 4.98-4.65 4.98-6.37V2.36'
        stroke='currentColor'
      />
    </svg>
  )
}
