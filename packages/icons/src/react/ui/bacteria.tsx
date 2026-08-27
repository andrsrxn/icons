import type { Icon } from './types'

export const IconBacteria: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-bacteria'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M13.83 6.64C12.56 3.61 8.8 2.31 6.15 4.26A4.1 4.1 0 0 0 4.6 9.02a25 25 0 0 0 3.17 5.94 25 25 0 0 0 4.73 4.77 4.1 4.1 0 0 0 5.01-.08c2.65-1.95 2.52-5.93 0-8.04a15 15 0 0 1-2.26-2.2 15 15 0 0 1-1.42-2.77m2.67 9.16a1.79 1.79 0 1 1-3.53-.53 1.79 1.79 0 0 1 3.53.53'
        fill='currentColor'
      />
      <path
        d='M9.48 7.2a.57.57 0 1 1-.62-.95.57.57 0 0 1 .62.95m-.14 3.6a.48.48 0 1 1-.52-.8.48.48 0 0 1 .52.8'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.47 8.66a4.1 4.1 0 0 1 1.17-4.42c2.67-2.5 7.04-1.15 8.28 2.3.44 1.22.9 2.27 1.33 2.87.43.58 1.26 1.3 2.25 2.04 2.88 2.16 3 6.64-.07 8.54a4.1 4.1 0 0 1-4.72-.1 25 25 0 0 1-4.94-4.93 25 25 0 0 1-3.3-6.3M14.85 3 13.1 4.17m6.03 5.13-1.45 1.65m3.96 3.49-2.07.34M12 20.08l-1.48 1.81m-4.5-8.49-2.27 1.21m12.79-7.68-1.36.65M8.92 17l-1.06 1.15M4.23 9.2h-2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='14.73'
        cy='15.54'
        r='1.79'
        transform='rotate(8.58 14.73 15.54)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
