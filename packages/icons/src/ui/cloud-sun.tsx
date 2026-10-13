import type { Icon } from './types'

export const IconCloudSun: Icon = ({
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
      data-slot='icon-ui-cloud-sun'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M4.86 19.16c-.91 0-1.8-.4-2.4-1.07a3.7 3.7 0 0 1-.97-2.49 3.47 3.47 0 0 1 3.37-3.56c1.1 0 2.08.56 2.7 1.43'
        stroke='currentColor'
      />
      <path d='M15.03 19.16H4.73' stroke='currentColor' />
      <path
        d='M5.26 12.04a4.06 4.06 0 0 1 7.46-.94c.66 1.16.64 2.33.48 3.1'
        stroke='currentColor'
      />
      <path
        d='M13.32 12.74a2.8 2.8 0 0 1 2.69.09 3.4 3.4 0 0 1 1.25 4.66c-.56.97-1.32 1.56-2.1 1.66'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M15.87 13.04c-1.62-.88-3.1-.38-3.28-2.34s.63-3.04 2.59-3.22a3.56 3.56 0 0 1 3.88 3.22c.18 1.96-1.32 3.18-3.19 2.34'
        fill='currentColor'
      />
      <path d='M17.69 13.85a3.56 3.56 0 1 0-5.5-4.1' stroke='currentColor' />
      <path d='M21.74 11.98h.82' stroke='currentColor' />
      <path d='M13.6 4.95V4.1' stroke='currentColor' />
      <path d='m19.7 6.32.65-.76' stroke='currentColor' />
    </svg>
  )
}
