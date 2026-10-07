import type { Icon } from './types'

export const IconKeyboard: Icon = ({
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
      data-slot='icon-ui-keyboard'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='14.97'
        height='20.57'
        rx='3'
        transform='matrix(0 -1 -1 0 22.32 19.48)'
        fill='currentColor'
      />
      <rect
        width='14.97'
        height='20.57'
        rx='3'
        transform='matrix(0 -1 -1 0 22.32 19.48)'
        stroke='currentColor'
      />
      <path
        d='M6.13 8.19a.37.37 0 1 1-.75 0 .37.37 0 0 1 .75 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.32 12.46a.37.37 0 1 1-.75 0 .37.37 0 0 1 .75 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M6.13 12.46a.37.37 0 1 1-.75 0 .37.37 0 0 1 .75 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.32 8.19a.37.37 0 1 1-.75 0 .37.37 0 0 1 .75 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.5 12.46a.37.37 0 1 1-.75 0 .37.37 0 0 1 .75 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.5 8.19a.37.37 0 1 1-.75 0 .37.37 0 0 1 .75 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M18.69 12.46a.37.37 0 1 1-.75 0 .37.37 0 0 1 .75 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M18.69 8.19a.37.37 0 1 1-.75 0 .37.37 0 0 1 .75 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M15.63 16.52h-7.2' stroke='currentColor' />
    </svg>
  )
}
