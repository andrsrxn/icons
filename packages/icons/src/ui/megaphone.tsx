import type { Icon } from './types'

export const IconMegaphone: Icon = ({
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
      data-slot='icon-ui-megaphone'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M19.58 10.83v2.8c1.5 0 2.73-1.26 2.73-2.8a2.76 2.76 0 0 0-2.73-2.78z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M9.83 14.55V7.04h-4.3c-1.66 0-2.48 0-3.03.46l-.28.27c-.45.55-.45 1.38-.45 3.02s0 2.48.45 3.03q.13.15.28.27c.55.46 1.37.46 3.02.46z'
        fill='currentColor'
      />
      <path
        d='M8.69 6.76H5.58c-1.3 0-1.94 0-2.44.24a2.5 2.5 0 0 0-1.22 1.2c-.23.5-.23 1.16-.23 2.45s0 1.94.23 2.44q.4.81 1.22 1.21c.5.23 1.14.23 2.44.23h3.06c.5 0 .75 0 .99.06s.46.18.9.42l2.75 1.47c2.63 1.41 3.94 2.11 4.92 1.53.97-.58.97-2.07.97-5.05v-4.5c0-2.92 0-4.38-.95-4.96s-2.25.07-4.85 1.38l-2.88 1.45h0c-.42.22-.63.32-.86.38s-.47.05-.94.05'
        stroke='currentColor'
      />
      <path
        d='M20.04 13.62c1.26 0 2.27-1.25 2.27-2.79s-1.01-2.78-2.27-2.78'
        stroke='currentColor'
      />
      <path d='m9.82 6.88.01 12.16a1.71 1.71 0 0 1-3.28.7l-2.2-5.03' stroke='currentColor' />
    </svg>
  )
}
