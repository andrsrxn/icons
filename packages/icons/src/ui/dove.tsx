import type { Icon } from './types'

export const IconDove: Icon = ({
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
      data-slot='icon-ui-dove'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M19.69 8.24c-.88-1.58-3.77-2.34-5.02-.31-.27.3-.7.4-.98.12-.93-.91-1.85-3.12-2.7-4.94 0 0-2.23 3.4-2.78 4.82-1.46.44-3.92-2.68-4.37-3.14-.62 1.02-1.1 3.9 0 6.63s2.57 4.1 4.04 4.92a8.7 8.7 0 0 0-5.8 1.41c-.47.36-.34 1.04.17 1.33l3.8 2.21a1 1 0 0 0 1 0l2.59-1.48q.44-.23.91-.06c1.15.4 3.37.82 5.74-.19 3.1-1.32 3.44-4.54 3.62-6.28.13-1.25 1.5-2.35 2.4-3.12.28-.24.17-.67-.2-.77l-1.6-.42a1.4 1.4 0 0 1-.82-.73'
        fill='currentColor'
      />
      <path
        d='m14.25 8.2-.58 1.37c-.21.49-.77.73-1.28.55-.54-.19-1.1-.4-2.57-1.05-3.4-1.53-4.95-3.22-5.98-4.28-.62 1.02-1.1 3.9 0 6.63s2.57 4.1 4.04 4.92a8.7 8.7 0 0 0-5.8 1.41c-.47.36-.34 1.04.17 1.33l3.8 2.21a1 1 0 0 0 1 0l2.59-1.48q.44-.23.91-.06c1.15.4 3.37.82 5.74-.19 3.1-1.32 3.44-4.54 3.62-6.28.13-1.25 1.5-2.35 2.4-3.12.28-.24.17-.67-.2-.77l-1.6-.42c-.37-.1-.64-.4-.83-.73-.94-1.6-4.13-2.41-5.43-.04Z'
        stroke='currentColor'
      />
      <path
        d='M8.4 8.26c.27-2.7 1.84-4.97 2.73-5.6.37 1.28.87 3.28 2.88 5.84'
        stroke='currentColor'
      />
      <path
        d='M17.43 9.97a.4.4 0 1 1-.81 0 .4.4 0 0 1 .81 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
