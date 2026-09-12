import type { Icon } from './types'

export const IconRobot: Icon = ({
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
      data-slot='icon-ui-robot'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='4.68'
        y='7.61'
        width='14.63'
        height='14.63'
        rx='3'
        fill='currentColor'
      />
      <path
        d='M15.16 17.34a4.4 4.4 0 0 1-3.16 1.1c-1.4 0-2.44-.49-3.17-1.1'
        stroke='currentColor'
      />
      <path d='M9.59 11.85v1.68' stroke='currentColor' />
      <path d='M14.64 11.85v1.68' stroke='currentColor' />
      <path d='M1.86 12.23v5.4' stroke='currentColor' />
      <path d='M22.14 12.23v5.4' stroke='currentColor' />
      <path d='M12 5.44V7.6' stroke='currentColor' />
      <rect x='4.68' y='7.61' width='14.63' height='14.63' rx='3' stroke='currentColor' />
      <path
        d='M10.27 3.48A1.73 1.73 0 0 0 12 5.22a1.73 1.73 0 1 0-1.73-1.74'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M10.23 3.7a1.73 1.73 0 1 0 3.47 0 1.73 1.73 0 0 0-3.47 0'
        fill='currentColor'
      />
    </svg>
  )
}
