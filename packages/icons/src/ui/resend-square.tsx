import type { Icon } from './types'

export const IconResendSquare: Icon = ({
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
      data-slot='icon-ui-resend-square'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.2 22c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-4.72l-3.32 2.36-.66-3.6-5.81.87-3.93 2.26 3.34-5.93 6.4-2.6.23-1.17H7.68c-2.83 0-4.25 0-5.13.88s-.87 2.3-.87 5.12V16c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88z'
        fill='currentColor'
      />
      <path
        d='m20.55 5.05-.97-1c-1.35-1.38-2.03-2.07-2.61-1.89l-.16.07c-.54.27-.54 1.24-.54 3.17-4.12 0-7.3 2-8.95 5.6-.46 1-.69 1.49-.4 1.73.27.25.78-.07 1.79-.7 3.8-2.4 5.54-1.81 7.56-1.81 0 1.99 0 2.98.57 3.25l.1.04c.6.21 1.3-.5 2.68-1.93l.93-.95c1.28-1.31 1.92-1.97 1.92-2.79 0-.81-.64-1.47-1.92-2.79'
        stroke='currentColor'
      />
      <path
        d='M9.1 3.47H7.67c-2.83 0-4.25 0-5.13.88s-.87 2.3-.87 5.12V16c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88h6.89c2.47 0 3.7 0 4.54-.69a3 3 0 0 0 .4-.4c.7-.83.7-2.07.7-4.54'
        stroke='currentColor'
      />
    </svg>
  )
}
