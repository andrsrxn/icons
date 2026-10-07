import type { Icon } from './types'

export const IconRingGem: Icon = ({
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
      data-slot='icon-ui-ring-gem'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M15.49 8.15a7.4 7.4 0 0 1 3.97 6.61 7.46 7.46 0 0 1-14.92 0A7.4 7.4 0 0 1 8.5 8.15'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m16.72 5.4-1.53-2.94c-.16-.31-.24-.47-.38-.54s-.32-.04-.67.01l-1.06.17c-.4.07-.6.1-.72.24s-.12.34-.12.75v3.35l.08 2.16c.05 1.03.07 1.54.38 1.65.31.12.66-.26 1.36-1l2.5-2.7c.23-.26.35-.38.37-.54.02-.15-.06-.3-.21-.6'
        fill='currentColor'
      />
      <path
        d='m7.7 3.98.43-.72c.42-.72.64-1.08.98-1.28.35-.2.77-.2 1.6-.2h2.62c.84 0 1.26 0 1.6.2s.56.56.99 1.28l.42.72c.54.93.81 1.39.76 1.88-.05.5-.42.89-1.15 1.68L14.23 9.4h0c-1.04 1.11-1.55 1.67-2.2 1.67s-1.18-.56-2.21-1.67L8.09 7.54C7.36 6.74 7 6.35 6.95 5.86c-.06-.5.21-.95.76-1.88'
        stroke='currentColor'
      />
      <path d='M16.86 5.41 12.03 6.5 7.3 5.4' stroke='currentColor' />
      <path d='M12.07 2.23v7.99' stroke='currentColor' />
    </svg>
  )
}
