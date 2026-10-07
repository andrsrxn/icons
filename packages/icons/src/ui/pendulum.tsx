import type { Icon } from './types'

export const IconPendulum: Icon = ({
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
      data-slot='icon-ui-pendulum'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M1.75 4.63h20.5' stroke='currentColor' />
      <path d='M4.88 14.9V4.63' stroke='currentColor' />
      <path d='M10.6 14.9V4.63' stroke='currentColor' />
      <path d='M18.35 14.9 15.4 4.63' stroke='currentColor' />
      <path
        opacity='.2'
        d='M7.12 17.14a2.23 2.23 0 1 1-4.47 0 2.23 2.23 0 0 1 4.47 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M12.83 17.14a2.23 2.23 0 1 1-4.47 0 2.23 2.23 0 0 1 4.47 0'
        fill='currentColor'
      />
      <path
        d='M7.12 17.14a2.23 2.23 0 0 1-2.24 2.23 2.23 2.23 0 1 1 2.24-2.23'
        stroke='currentColor'
      />
      <path
        d='M12.83 17.14a2.23 2.23 0 0 1-2.23 2.23 2.23 2.23 0 1 1 2.23-2.23'
        stroke='currentColor'
      />
      <path
        d='M21.35 17.14a2.23 2.23 0 0 1-2.23 2.23 2.23 2.23 0 1 1 2.23-2.23'
        stroke='currentColor'
      />
    </svg>
  )
}
