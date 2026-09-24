import type { Icon } from './types'

export const IconWhistle: Icon = ({
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
      data-slot='icon-ui-whistle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.18 12.5a7.25 7.25 0 1 1-7.25-7.25c1.57 0 11.66-.4 12.85.45.75.54.2 6.26.2 6.26z'
        fill='currentColor'
      />
      <path d='M16.18 12.5a7.25 7.25 0 1 1-7.25-7.25' stroke='currentColor' />
      <path
        d='M8.89 5.25h9.75c1.52 0 2.27 0 2.8.4a2 2 0 0 1 .43.42c.39.52.39 1.28.39 2.8s0 2.28-.4 2.8a2 2 0 0 1-.42.43c-.53.39-1.28.39-2.8.39h-2.46'
        stroke='currentColor'
      />
      <path d='M9.1 5.31v4.92' stroke='currentColor' />
    </svg>
  )
}
