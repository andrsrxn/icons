import type { Icon } from './types'

export const IconPlayingSpades: Icon = ({
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
      data-slot='icon-ui-playing-spades'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.74 5.54c3.01 3.1 7.19 5.67 3.56 10.08-1.76 2.13-4.13 1.85-5.95 1.38-.56-.15 1.18 3.11.7 4.61-.4 1.23-3.25.74-3.25.74s-3 .62-3.32-.6c-.4-1.51 1.68-4.93 1.05-4.78-2.41.56-5.67.94-6.4-2.13C1 10.96 4.78 8.49 7.06 5.54c1.46-1.88 4.86-3.94 4.86-3.94s3.16 2.24 4.82 3.94'
        fill='currentColor'
      />
      <path
        d='m10.18 16.8-1.11 2.7c-.52 1.25-.78 1.87-.48 2.32s.97.44 2.32.44h2.12c1.33 0 2 0 2.3-.44.3-.43.05-1.05-.44-2.3l-1.07-2.73'
        stroke='currentColor'
      />
      <path
        d='M13.9 16.83c2.39 1.24 5.5.68 6.79-1.56C23.94 9.64 14.29 3.16 12 1.63'
        stroke='currentColor'
      />
      <path
        d='M10.1 16.83c-2.39 1.24-5.5.68-6.79-1.56C.06 9.64 9.71 3.16 12 1.63'
        stroke='currentColor'
      />
    </svg>
  )
}
