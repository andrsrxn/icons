import type { Icon } from './types'

export const IconTextDecreaseSpacing: Icon = ({
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
      data-slot='icon-ui-text-decrease-spacing'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.19 6h-10.1' stroke='currentColor' />
      <path d='M21.19 11.98h-10.1' stroke='currentColor' />
      <path d='M21.19 17.85h-10.1' stroke='currentColor' />
      <path
        d='m2.72 7.75 1.22 1.23c.66.66 1 1 1.41 1s.75-.34 1.42-1l1.22-1.23'
        stroke='currentColor'
      />
      <path
        d='m2.72 16.26 1.22-1.22c.66-.67 1-1 1.41-1s.75.33 1.42 1l1.22 1.22'
        stroke='currentColor'
      />
      <path d='M5.35 20.39v-5.96' stroke='currentColor' />
      <path d='M5.35 9.57V3.6' stroke='currentColor' />
    </svg>
  )
}
