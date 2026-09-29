import type { Icon } from './types'

export const IconPlayingClubs: Icon = ({
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
      data-slot='icon-ui-playing-clubs'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.74 5.91c0 3.62 7.19 5.3 3.56 9.7-1.76 2.14-4.13 1.86-5.95 1.39-.56-.15 1.18 3.11.7 4.61-.4 1.23-3.25.74-3.25.74s-3 .62-3.32-.6c-.4-1.51 1.68-4.93 1.05-4.78-2.41.56-5.67.94-6.4-2.13C1 10.96 7.1 8.98 7.1 5.9c0-2.38 2.16-4.3 4.82-4.3s4.82 1.92 4.82 4.3'
        fill='currentColor'
      />
      <path d='M17 8.17V6.2c0-2.47-2.23-4.48-5-4.48s-5 2-5 4.48v1.97' stroke='currentColor' />
      <path
        d='M9.94 16.8c-2.4 1.23-5.3.6-6.69-1.53-1.38-2.14-.56-4.88 1.84-6.12l1.9-.98'
        stroke='currentColor'
      />
      <path
        d='m10 16.78-1.07 2.76c-.48 1.23-.72 1.85-.42 2.28.3.44.96.44 2.28.44h2.28c1.34 0 2 0 2.3-.44s.06-1.06-.44-2.3l-1.09-2.74'
        stroke='currentColor'
      />
      <path
        d='M13.95 16.83c2.4 1.24 5.41.58 6.8-1.56s.56-4.88-1.84-6.12l-1.9-.98'
        stroke='currentColor'
      />
    </svg>
  )
}
