import type { Icon } from './types'

export const IconHistory: Icon = ({
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
      data-slot='icon-ui-history'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M11.28 7.38v3.5c0 1.04 0 1.56.24 2 .24.45.67.74 1.54 1.32l2.41 1.6'
        stroke='currentColor'
      />
      <path
        d='M1.81 4.05v1.53c0 1.43 0 2.15.45 2.6.44.44 1.16.44 2.59.44h1.54'
        stroke='currentColor'
      />
      <path
        d='M4.27 18.39A10.1 10.1 0 1 0 12.1 1.9c-5.58 0-8.15 4.44-9.3 6.02'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='12' cy='12' r='10.19' fill='currentColor' />
    </svg>
  )
}
