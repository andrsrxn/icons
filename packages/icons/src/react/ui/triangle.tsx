import type { Icon } from './types'

export const IconTriangle: Icon = ({
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
      data-slot='icon-ui-triangle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m8.47 6.68-4.78 8.7c-1.45 2.64-2.18 3.96-1.6 4.94s2.1.98 5.1.98h9.6c3.02 0 4.53 0 5.1-.98.59-.99-.14-2.3-1.6-4.95l-4.81-8.7c-1.55-2.8-2.33-4.21-3.51-4.2s-1.95 1.4-3.5 4.2'
        fill='currentColor'
      />
      <path
        d='m8.47 6.68-4.78 8.7c-1.45 2.64-2.18 3.96-1.6 4.94s2.1.98 5.1.98h9.6c3.02 0 4.53 0 5.1-.98.59-.99-.14-2.3-1.6-4.95l-4.81-8.7c-1.55-2.8-2.33-4.21-3.51-4.2s-1.95 1.4-3.5 4.2'
        stroke='currentColor'
      />
    </svg>
  )
}
