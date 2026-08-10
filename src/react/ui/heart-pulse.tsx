import type { Icon } from './types'

export const IconHeartPulse: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='heart-pulse'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12 19.34c.19 0 .38-.17.77-.5 2.2-1.95 5.39-3.6 6.79-6.62h-5.24l-1.55 1.94-2.83-4.11-1.76 2.17H4.44c1.4 3.01 4.6 4.67 6.8 6.61.38.34.57.51.76.51'
        fill='currentColor'
      />
      <path
        d='M7.87 4.61c2.08 0 3.62 1.7 4.13 2.54.51-.84 2.05-2.54 4.13-2.54 2.6 0 4.13 2.46 4.13 4.32 0 5.79-5.5 7.71-8.26 10.64-2.75-2.93-8.26-4.85-8.26-10.64 0-1.86 1.53-4.32 4.13-4.32'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.82 12.09H7.9c.29 0 .43 0 .55-.07s.19-.2.33-.44l.33-.6c.4-.7.59-1.06.88-1.05.3 0 .5.36.87 1.07l1.22 2.28c.4.75.6 1.13.91 1.12.3 0 .5-.38.87-1.15l.3-.6c.13-.27.2-.4.32-.48s.27-.08.57-.08h4.13'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
