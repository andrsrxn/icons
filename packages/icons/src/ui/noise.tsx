import type { Icon } from './types'

export const IconNoise: Icon = ({
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
      data-slot='icon-ui-noise'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='10.22'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.22' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M18.1 11.75a.42.42 0 1 1-.84 0 .42.42 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.81 17.77a.42.42 0 1 1-.83 0 .42.42 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.27 10.35a.42.42 0 1 1-.84 0 .42.42 0 0 1 .84 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M11.45 5.62a.42.42 0 1 1-.83 0 .42.42 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M6.74 14.49a.42.42 0 1 1-.83 0 .42.42 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.76 14.49a.42.42 0 1 1-.83 0 .42.42 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.26 16.94a.42.42 0 1 1-.83 0 .42.42 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.84 7.18a.42.42 0 1 1-.83 0 .42.42 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M7.57 9a.42.42 0 1 1-.83 0 .42.42 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
