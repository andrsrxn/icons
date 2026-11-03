import type { Icon } from './types'

export const IconTextIncreaseSpacing: Icon = ({
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
      data-slot='icon-ui-text-increase-spacing'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.19 6h-10.1' stroke='currentColor' />
      <path d='M21.19 11.98h-10.1' stroke='currentColor' />
      <path d='M21.19 17.85h-10.1' stroke='currentColor' />
      <path
        d='m2.72 5.88 1.22-1.22c.66-.67 1-1 1.41-1s.75.33 1.42 1l1.22 1.22'
        stroke='currentColor'
      />
      <path
        d='m2.72 18.14 1.22 1.22c.66.67 1 1 1.41 1s.75-.33 1.42-1l1.22-1.22'
        stroke='currentColor'
      />
      <path d='M5.35 14.02v5.95' stroke='currentColor' />
      <path d='M5.35 4.07v5.96' stroke='currentColor' />
    </svg>
  )
}
