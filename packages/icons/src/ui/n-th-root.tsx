import type { Icon } from './types'

export const IconNThRoot: Icon = ({
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
      data-slot='icon-ui-n-th-root'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M2.62 12.3h1.9c.65 0 .98 0 1.23.17.26.17.38.47.63 1.08l1.8 4.48c.85 2.08 1.27 3.13 1.97 3.1.7-.01 1.06-1.08 1.78-3.2l4.3-12.6c.23-.66.34-.98.6-1.17s.6-.19 1.3-.19h3.25'
        stroke='currentColor'
      />
      <path d='M5.64 8.48V3.3' stroke='currentColor' />
      <path d='M5.64 6.76c0-1.9 1.28-3.45 2.86-3.45s2.85.91 2.85 3.45v1.72' stroke='currentColor' />
    </svg>
  )
}
