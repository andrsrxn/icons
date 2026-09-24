import type { Icon } from './types'

export const IconTestTube: Icon = ({
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
      data-slot='icon-ui-test-tube'
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
        d='M12 22.26a3.1 3.1 0 0 0 3.1-3.09V1.75H8.9v17.42a3.1 3.1 0 0 0 3.1 3.1'
        stroke='currentColor'
      />
      <path d='M7.48 1.75h9.04' stroke='currentColor' />
      <path d='M8.9 12.48h6.2' stroke='currentColor' />
    </svg>
  )
}
