import type { Icon } from './types'

export const IconContract: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-contract'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M4.74 13.88H6.2c1.89 0 2.83 0 3.42.58.59.59.59 1.53.59 3.42v1.48'
        stroke='currentColor'
      />
      <path
        d='M19.16 10.19h-1.28c-1.88 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42V4.9'
        stroke='currentColor'
      />
      <path d='m3.1 21 6.16-6.16' stroke='currentColor' />
      <path d='m21 3.07-6.16 6.16' stroke='currentColor' />
    </svg>
  )
}
