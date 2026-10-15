import type { Icon } from './types'

export const IconBackgroundGradient: Icon = ({
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
      data-slot='icon-ui-background-gradient'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.28 2.92c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v8.16c0 1.88 0 2.82-.59 3.41-.58.59-1.52.59-3.41.59H6.8c-1.89 0-2.83 0-3.42-.59s-.58-1.53-.58-3.41V8.92c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88z'
        fill='currentColor'
      />
      <rect
        width='18.48'
        height='18.48'
        rx='3'
        transform='scale(1 -1)rotate(90 21.24 0)'
        stroke='currentColor'
      />
      <path
        d='M8.13 6.88a.76.76 0 1 1-1.53 0 .76.76 0 0 1 1.53 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.07 7.33a.57.57 0 1 1-1.13 0 .57.57 0 0 1 1.13 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M8.13 12a.76.76 0 1 1-1.53 0 .76.76 0 0 1 1.53 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.07 12a.57.57 0 1 1-1.13 0 .57.57 0 0 1 1.13 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.48 9.43a.43.43 0 1 1-.87 0 .43.43 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M8.13 17.12a.76.76 0 1 1-1.53 0 .76.76 0 0 1 1.53 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.07 16.67a.57.57 0 1 1-1.13 0 .57.57 0 0 1 1.13 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.48 14.57a.43.43 0 1 1-.87 0 .43.43 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
