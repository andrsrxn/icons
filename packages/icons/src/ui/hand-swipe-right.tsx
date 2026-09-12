import type { Icon } from './types'

export const IconHandSwipeRight: Icon = ({
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
      data-slot='icon-ui-hand-swipe-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M20.74 4.8H15.3' stroke='currentColor' />
      <path
        d='m19.47 7.9.28-.28c1.33-1.33 2-2 2-2.83s-.67-1.5-2-2.83l-.28-.28'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m7.67 5.32 1.85-.62 1.43.62.75 5.5 2.87-.59 1.4 1.96h2.96l.42 8.6-1.3 1.8H7.87L4.59 18.4l-2.11-4.92 2.25-1.75 2.6 1.47z'
        fill='currentColor'
      />
      <path d='M15.45 15.18V12.1a2 2 0 0 0-4.02 0v3.08' stroke='currentColor' />
      <path
        d='M15.45 14.83V13.8a2 2 0 0 1 4.01 0v4.03c0 2.42-1.41 4.52-1.41 4.52'
        stroke='currentColor'
      />
      <path d='M11.43 13.81v-7.2a2 2 0 0 0-4.01 0v7.81' stroke='currentColor' />
      <path
        d='m7.41 14.53-.97-1.69a2.16 2.16 0 0 0-2.96-.79 2.1 2.1 0 0 0-.9 2.63 31 31 0 0 0 2.1 4.12c.94 1.46 2.73 3.51 2.73 3.51'
        stroke='currentColor'
      />
    </svg>
  )
}
