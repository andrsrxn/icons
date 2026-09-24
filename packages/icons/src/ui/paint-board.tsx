import type { Icon } from './types'

export const IconPaintBoard: Icon = ({
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
      data-slot='icon-ui-paint-board'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.77 12.02c0 5.68 4.6 10.29 10.29 10.29 2.05 0 1.7-2.14 1.34-4.34-.28-1.7 1.56-2.49 1.56-2.49s6.9.08 7.24-3.78c.49-5.67-4.46-9.97-10.14-9.97a10.3 10.3 0 0 0-10.3 10.29'
        fill='currentColor'
      />
      <path
        d='M17.02 7.15a.8.8 0 1 1-1.14 1.14.8.8 0 0 1 1.14-1.14'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M11.8 5.78a.8.8 0 1 1-1.14 1.14.8.8 0 0 1 1.14-1.14'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M7.44 8.78A.8.8 0 1 1 6.3 9.92a.8.8 0 0 1 1.14-1.14'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M7.88 14.12a.8.8 0 1 1-1.14 1.14.8.8 0 0 1 1.14-1.14'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M1.96 12.05c.1 6.88 5.7 9.84 9.7 10.03q.41.01.78-.17a1.8 1.8 0 0 0 .9-2.33l-.31-.72a2.6 2.6 0 0 1 .16-2.35l.02-.04a2.9 2.9 0 0 1 2.35-1.38c6.51-.38 6.51-3.16 6.51-5.17 0-6.6-6.14-8.23-9.95-8.23-6.24 0-10.25 4.7-10.16 10.36'
        stroke='currentColor'
      />
    </svg>
  )
}
