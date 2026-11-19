import type { Icon } from './types'

export const IconRefreshSparkle: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-refresh-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M18.17 12.88c0 1.95-2.1 4.07-4.07 4.07' stroke='currentColor' />
      <path d='M18.17 12.88c0 1.96 2.12 4.07 4.07 4.07' stroke='currentColor' />
      <path d='M18.17 21.03c0-1.92-2.12-4.07-4.07-4.07' stroke='currentColor' />
      <path d='M18.17 21.03c0-1.95 2.14-4.07 4.07-4.07' stroke='currentColor' />
      <path
        opacity='.2'
        d='M2.57 12.07a9.4 9.4 0 0 0 15.47 7.19l-2.57-2.41 2.57-2.6 2.35 2.03a9.4 9.4 0 1 0-17.82-4.21'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M3.52 15.96c1.91 3.4 4.63 5.49 8.92 5.49q.87 0 1.66-.16' stroke='currentColor' />
      <path
        d='M20.67 8.17c-1.92-3.4-5.1-5.48-8.93-5.48-4.15 0-6.86 2.76-8.55 5.48'
        stroke='currentColor'
      />
      <path
        d='m16.76 8.61 1.65.27c1.54.25 2.3.38 2.86-.02s.68-1.17.93-2.7l.27-1.66'
        stroke='currentColor'
      />
      <path
        d='m1.54 19.23.35-1.64c.33-1.53.5-2.29 1.07-2.66s1.34-.2 2.87.13l1.64.35'
        stroke='currentColor'
      />
    </svg>
  )
}
