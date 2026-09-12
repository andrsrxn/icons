import type { Icon } from './types'

export const IconUfo: Icon = ({
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
      data-slot='icon-ui-ufo'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m2.65 11.2 4-1.86 5.55 1.86 5.28-1.86 3.8 1.86.57 2.88L11.99 18 1.96 14.08z'
        fill='currentColor'
      />
      <path
        d='M17.3 9.47A5.23 5.23 0 0 0 12 4.32a5.23 5.23 0 0 0-5.32 5.15'
        stroke='currentColor'
      />
      <path d='M17.3 9.64A8.8 8.8 0 0 1 12 11.1c-1.96 0-3.74-.27-5.32-1.46' stroke='currentColor' />
      <path
        d='m6.7 9.33-2.74 1.43c-1.54.8-2.3 1.2-2.35 2.07-.04.86.61 1.28 1.9 2.11A15.6 15.6 0 0 0 12 17.53c3.62 0 6.53-1.32 8.51-2.6 1.29-.83 1.93-1.25 1.9-2.1-.04-.87-.8-1.27-2.33-2.08L17.4 9.33'
        stroke='currentColor'
      />
      <path
        d='M7.96 13.43a.47.47 0 1 1-.95 0 .47.47 0 0 1 .95 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.98 13.43a.47.47 0 1 1-.95 0 .47.47 0 0 1 .95 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.47 14.15a.47.47 0 1 1-.95 0 .47.47 0 0 1 .95 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M6.69 17.03 4.72 19' stroke='currentColor' />
      <path d='M17.31 17.03 19.28 19' stroke='currentColor' />
    </svg>
  )
}
