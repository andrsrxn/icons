import type { Icon } from './types'

export const IconDeviceLaptopPhone: Icon = ({
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
      data-slot='icon-ui-device-laptop-phone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.81 16.13c.3-.41.44-.62.66-.74s.47-.11.98-.11h9.22c.9 0 1.34 0 1.63.27s.31.72.37 1.6l.04.69c.07 1 .1 1.5-.2 1.81s-.8.32-1.8.32H3.99c-1.69 0-2.53 0-2.81-.54s.2-1.23 1.17-2.61z'
        fill='currentColor'
      />
      <path
        d='M20 9.75c0-2.55 0-3.83-.73-4.68l-.31-.3c-.84-.74-2.12-.74-4.68-.74H10c-2.83 0-4.24 0-5.12.88S4 7.21 4 10.03v4.7'
        stroke='currentColor'
      />
      <path
        d='m4.02 14.73-.32.44c-1.57 2.1-2.35 3.14-1.93 3.97.41.83 1.72.83 4.33.83h10.02'
        stroke='currentColor'
      />
      <path d='M15.5 14.73H4' stroke='currentColor' />
      <rect
        x='15.5'
        y='20.35'
        width='10.46'
        height='6.73'
        rx='2'
        transform='rotate(-90 15.5 20.35)'
        stroke='currentColor'
      />
      <path d='M19.5 12.6h-1.28' stroke='currentColor' />
    </svg>
  )
}
