import type { Icon } from './types'

export const IconIsland: Icon = ({
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
      data-slot='icon-ui-island'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M10.7 16.15a9.2 9.2 0 0 0-8.65 6.67h17.27c-.59-3.27-4.7-6.66-8.62-6.67'
        fill='currentColor'
      />
      <path d='M10.71 15.82s-.23-3.03 1.1-5.39a11 11 0 0 1 3.66-3.7' stroke='currentColor' />
      <path d='M15.42 6.1a4 4 0 0 0-2.06-.77 4.5 4.5 0 0 0-2.57.45' stroke='currentColor' />
      <path d='M22.18 7.1a6 6 0 0 0-2.9-1.17 6 6 0 0 0-3.63.58' stroke='currentColor' />
      <path d='M17.97 10.73c.07-.5-.09-1.43-.52-2.27a5 5 0 0 0-1.9-2.02' stroke='currentColor' />
      <path d='M15.6 6.27c.09-.56-.1-1.62-.59-2.57a5.4 5.4 0 0 0-2.15-2.3' stroke='currentColor' />
      <path
        d='M2.05 22.4c.93-3.53 4.72-6.26 8.65-6.25 3.92 0 8.03 3.18 8.62 6.24'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M4.7 7.58a2.4 2.4 0 1 0 0-4.78 2.4 2.4 0 0 0 0 4.78'
        fill='currentColor'
      />
      <path d='M4.7 7.58a2.4 2.4 0 1 1 0-4.79 2.4 2.4 0 0 1 0 4.79' stroke='currentColor' />
    </svg>
  )
}
