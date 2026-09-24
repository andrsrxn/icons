import type { Icon } from './types'

export const IconCloudFog: Icon = ({
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
      data-slot='icon-ui-cloud-fog'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m1.62 12.94 3.84 3.8H19.1l2.96-2.15v-4.28l-3.3-2.35-1.73 1.21-.93-3.5-3.95-2.27-3.3 1.42-1.66 3.14-3.85 1.21z'
        fill='currentColor'
      />
      <path d='M10.57 18.72h5.57' stroke='currentColor' />
      <path d='M8.24 14.98h5.57' stroke='currentColor' />
      <path d='M6.97 7.55a5.09 5.09 0 0 1 9.33-1.18c.84 1.44.8 2.9.61 3.88' stroke='currentColor' />
      <path
        d='M5.16 16.38a3.6 3.6 0 0 1-2.15-1.16 4.27 4.27 0 0 1 3.06-7.27c1.4 0 2.64.67 3.42 1.71'
        stroke='currentColor'
      />
      <path
        d='M17.05 8.41a3.6 3.6 0 0 1 3.38.12 4.3 4.3 0 0 1 1.56 5.84c-.7 1.21-1.65 1.95-2.63 2.08'
        stroke='currentColor'
      />
    </svg>
  )
}
