import type { Icon } from './types'

export const IconSubtitlesOff: Icon = ({
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
      data-slot='icon-ui-subtitles-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.72'
        y='4.72'
        width='20.56'
        height='14.57'
        rx='3'
        fill='currentColor'
      />
      <path d='M4.84 15.7h7.34' stroke='currentColor' />
      <path d='M4.84 12.12h3.38' stroke='currentColor' />
      <path d='M16.1 15.7h3.06' stroke='currentColor' />
      <path d='M12.18 12.12h6.98' stroke='currentColor' />
      <rect x='1.72' y='4.72' width='20.56' height='14.57' rx='3' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
