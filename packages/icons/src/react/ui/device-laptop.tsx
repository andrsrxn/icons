import type { Icon } from './types'

export const IconDeviceLaptop: Icon = ({
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
      data-slot='icon-ui-device-laptop'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.81 16.13c.3-.41.44-.62.66-.74s.47-.11.98-.11H19.8c.54 0 .81 0 1.04.12.22.13.37.36.66.81l.43.69c.85 1.35 1.28 2.03 1 2.55-.3.52-1.1.52-2.7.52H3.99c-1.69 0-2.53 0-2.81-.54s.2-1.23 1.17-2.61z'
        fill='currentColor'
      />
      <path
        d='M20 14.73v-4.7c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-4c-2.83 0-4.24 0-5.12.88S4 7.21 4 10.03v4.7'
        stroke='currentColor'
      />
      <path
        d='m4.02 14.73-.32.44c-1.57 2.1-2.35 3.14-1.93 3.97.41.83 1.72.83 4.33.83h11.85c2.65 0 3.97 0 4.38-.84.42-.84-.39-1.89-2-3.99l-.31-.4'
        stroke='currentColor'
      />
      <path d='M20 14.73H4' stroke='currentColor' />
    </svg>
  )
}
