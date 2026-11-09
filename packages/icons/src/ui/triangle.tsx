import type { Icon } from './types'

export const IconTriangle: Icon = ({
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
      data-slot='icon-ui-triangle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M8.46 6.82 3.62 15.8c-1.42 2.63-2.13 3.95-1.55 4.93s2.07.97 5.07.97h9.7c3 0 4.5 0 5.08-.98.59-.97-.13-2.3-1.56-4.93l-4.87-8.97c-1.55-2.86-2.33-4.3-3.52-4.29-1.2 0-1.97 1.44-3.51 4.3'
        fill='currentColor'
      />
      <path
        d='m4.43 13.22 2.3-4.17c2.3-4.21 3.47-6.32 5.24-6.32s2.93 2.1 5.26 6.3l2.3 4.18c2.2 3.96 3.3 5.95 2.42 7.42-.87 1.48-3.13 1.48-7.67 1.48h-4.6c-4.51 0-6.78 0-7.65-1.47-.87-1.48.22-3.46 2.4-7.42'
        stroke='currentColor'
      />
    </svg>
  )
}
