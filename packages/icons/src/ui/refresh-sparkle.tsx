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
      <path d='M18.45 13.28c0 1.8-1.94 3.75-3.75 3.75' stroke='currentColor' />
      <path d='M18.45 13.28c0 1.8 1.95 3.75 3.75 3.75' stroke='currentColor' />
      <path d='M18.45 20.78c0-1.77-1.95-3.75-3.75-3.75' stroke='currentColor' />
      <path d='M18.45 20.78c0-1.8 1.97-3.75 3.75-3.75' stroke='currentColor' />
      <path
        opacity='.2'
        d='M2.57 12.07a9.4 9.4 0 0 0 15.47 7.19L15.77 17l2.78-2.6 1.84 1.88a9.4 9.4 0 1 0-17.82-4.21'
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
        d='M15.84 9h1.86c1.73 0 2.6 0 3.13-.53.54-.54.54-1.4.54-3.14V3.47'
        stroke='currentColor'
      />
      <path d='M2.57 20.45v-1.83c0-1.7 0-2.56.53-3.09S4.48 15 6.19 15h1.83' stroke='currentColor' />
    </svg>
  )
}
