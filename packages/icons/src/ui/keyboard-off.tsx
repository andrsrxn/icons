import type { Icon } from './types'

export const IconKeyboardOff: Icon = ({
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
      data-slot='icon-ui-keyboard-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='14'
        height='20.57'
        rx='3'
        transform='matrix(0 -1 -1 0 22.28 19)'
        fill='currentColor'
      />
      <rect
        width='14'
        height='20.57'
        rx='3'
        transform='matrix(0 -1 -1 0 22.28 19)'
        stroke='currentColor'
      />
      <path
        d='M5.79 9.57a.57.57 0 1 1-1.15 0 .57.57 0 0 1 1.15 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M5.72 14.43a.57.57 0 1 1-1.15 0 .57.57 0 0 1 1.15 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.33 9.57a.57.57 0 1 1-1.14 0 .57.57 0 0 1 1.14 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.88 9.57a.57.57 0 1 1-1.15 0 .57.57 0 0 1 1.15 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M19.43 9.57a.57.57 0 1 1-1.15 0 .57.57 0 0 1 1.15 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M19.36 14.43a.57.57 0 1 1-1.15 0 .57.57 0 0 1 1.15 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M14.3 14.5H9.13' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
