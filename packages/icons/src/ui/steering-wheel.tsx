import type { Icon } from './types'

export const IconSteeringWheel: Icon = ({
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
      data-slot='icon-ui-steering-wheel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M9.53 12a2.46 2.46 0 1 0 4.93 0 2.46 2.46 0 0 0-4.93 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M12 22.32a10.32 10.32 0 1 1 0-20.64 10.32 10.32 0 0 1 0 20.64m0-2.64a7.68 7.68 0 1 0 0-15.36 7.68 7.68 0 0 0 0 15.36'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M1.7 12a10.31 10.31 0 1 1 20.61 0A10.31 10.31 0 0 1 1.7 12' stroke='currentColor' />
      <path d='M4.94 12a7.06 7.06 0 1 1 14.13 0 7.06 7.06 0 0 1-14.13 0' stroke='currentColor' />
      <path d='m18.27 8.8-3.93 2.34' stroke='currentColor' />
      <path d='m5.73 8.8 3.8 2.34' stroke='currentColor' />
      <path d='M12 14.46v4.6' stroke='currentColor' />
      <path d='M9.54 12a2.46 2.46 0 1 1 4.93 0 2.46 2.46 0 0 1-4.93 0' stroke='currentColor' />
    </svg>
  )
}
