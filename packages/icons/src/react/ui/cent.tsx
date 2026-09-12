import type { Icon } from './types'

export const IconCent: Icon = ({
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
      data-slot='icon-ui-cent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M17.73 5.23a8 8 0 0 0-3.58-.82A7.73 7.73 0 0 0 6.27 12c0 4.2 3.53 7.6 7.88 7.6q1.95-.02 3.58-.83'
        stroke='currentColor'
      />
      <path d='M12.77 21.41V2.59' stroke='currentColor' />
    </svg>
  )
}
