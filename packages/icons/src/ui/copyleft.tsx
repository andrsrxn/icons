import type { Icon } from './types'

export const IconCopyleft: Icon = ({
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
      data-slot='icon-ui-copyleft'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M22.31 12A10.31 10.31 0 1 1 1.7 12a10.31 10.31 0 0 1 20.62 0'
        fill='currentColor'
      />
      <path d='M22.3 12A10.3 10.3 0 0 1 12 22.31 10.31 10.31 0 1 1 22.3 12' stroke='currentColor' />
      <path d='M9.13 7.17q1.13-.58 2.48-.6a5.44 5.44 0 1 1-2.48 10.3' stroke='currentColor' />
    </svg>
  )
}
