import type { Icon } from './types'

export const IconClockTwelve: Icon = ({
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
      data-slot='icon-ui-clock-twelve'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 22.25a10.25 10.25 0 1 0-9.5-6.4l1.42-1.36.32 4.2A10.2 10.2 0 0 0 12 22.25'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M14.54 21.93a10.25 10.25 0 1 0-12.66-11.5' stroke='currentColor' />
      <path
        d='M12.6 5.7v3.9c0 1.04 0 1.57.24 2 .24.45.68.74 1.55 1.32l2.71 1.81'
        stroke='currentColor'
      />
      <path
        d='m2.13 15.56.52-.34c.68-.43 1.02-.64 1.28-.5s.26.55.26 1.35v4.79'
        stroke='currentColor'
      />
      <path
        d='M7.13 15.44c.68-1.1 3.12-1.17 3.12.9 0 1.45-1.84 2.17-2.96 3.92-.2.3.05.68.4.68h2.64'
        stroke='currentColor'
      />
    </svg>
  )
}
