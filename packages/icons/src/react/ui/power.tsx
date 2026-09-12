import type { Icon } from './types'

export const IconPower: Icon = ({
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
      data-slot='icon-ui-power'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.56 12.68a9.56 9.56 0 1 1-19.11 0 9.56 9.56 0 0 1 19.11 0'
        fill='currentColor'
      />
      <path
        d='M6.24 5.05A9.54 9.54 0 0 0 12 22.23a9.53 9.53 0 0 0 9.55-9.55 9.5 9.5 0 0 0-3.8-7.63'
        stroke='currentColor'
      />
      <path d='M12 13.36V1.73' stroke='currentColor' />
    </svg>
  )
}
