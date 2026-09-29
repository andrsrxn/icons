import type { Icon } from './types'

export const IconTestTubeSparkle: Icon = ({
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
      data-slot='icon-ui-test-tube-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12 22.26a3.1 3.1 0 0 0 3.1-3.09v-6.69H8.9v6.69a3.1 3.1 0 0 0 3.1 3.1'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m18.54 7.1-.93-1.76-.94 1.75-1.8 1 1.8.93.94 2.05.93-2.05L20.5 8z'
        fill='currentColor'
      />
      <path d='M8.9 1.75v17.42a3.1 3.1 0 1 0 6.2 0v-6.44' stroke='currentColor' />
      <path d='M7.48 1.75h9.04' stroke='currentColor' />
      <path d='M8.9 12.48h6.2' stroke='currentColor' />
      <path d='M14.44 8.26c1.6 0 3.3-1.72 3.3-3.3' stroke='currentColor' />
      <path d='M21.04 8.26c-1.59 0-3.3-1.72-3.3-3.3' stroke='currentColor' />
      <path d='M14.44 8.26c1.58 0 3.3 1.74 3.3 3.3' stroke='currentColor' />
      <path d='M21.04 8.26c-1.57 0-3.3 1.72-3.3 3.3' stroke='currentColor' />
      <path d='M15.1 1.75v2.28' stroke='currentColor' />
    </svg>
  )
}
