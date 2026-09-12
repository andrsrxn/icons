import type { Icon } from './types'

export const IconWarningCircle: Icon = ({
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
      data-slot='icon-ui-warning-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.78 12a10.22 10.22 0 1 0 20.43 0 10.22 10.22 0 0 0-20.43 0'
        fill='currentColor'
      />
      <path d='M1.79 12A10.2 10.2 0 0 0 12 22.22 10.22 10.22 0 1 0 1.8 12' stroke='currentColor' />
      <path d='M12 6.43v6.01' stroke='currentColor' />
      <path
        d='M12.68 16.6a.69.69 0 1 1-1.37 0 .69.69 0 0 1 1.37 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
