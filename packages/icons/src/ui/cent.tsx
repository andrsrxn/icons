import type { Icon } from './types'

export const IconCent: Icon = ({
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
      data-slot='icon-ui-cent'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M17.38 5.23a8 8 0 0 0-3.57-.82A7.73 7.73 0 0 0 5.93 12c0 4.2 3.53 7.6 7.88 7.6q1.95-.02 3.57-.83'
        stroke='currentColor'
      />
      <path d='M12.14 21.41V2.59' stroke='currentColor' />
    </svg>
  )
}
