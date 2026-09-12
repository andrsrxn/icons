import type { Icon } from './types'

export const IconThermometer: Icon = ({
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
      data-slot='icon-ui-thermometer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M9.98 14.38V4a2.02 2.02 0 0 1 4.04 0v10.38s1.75 1.91 1.75 3.56a3.77 3.77 0 1 1-7.54 0c0-1.65 1.75-3.56 1.75-3.56'
        fill='currentColor'
      />
      <path d='M9.81 14.76a4.07 4.07 0 1 0 4.38 0' stroke='currentColor' />
      <path
        d='M14.12 14.66V3.73a2 2 0 0 0-1.9-1.9h-.44a2 2 0 0 0-1.9 1.9v10.93'
        stroke='currentColor'
      />
      <path
        d='M12.5 18.1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
