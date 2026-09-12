import type { Icon } from './types'

export const IconListOrdered: Icon = ({
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
      data-slot='icon-ui-list-ordered'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.38 6H9.26' stroke='currentColor' />
      <path d='M21.38 12H9.26' stroke='currentColor' />
      <path d='M21.38 18H9.26' stroke='currentColor' />
      <path
        d='m2.59 6.52.84-.77c.72-.65 1.08-.98 1.38-.85s.3.62.3 1.6v4.01'
        stroke='currentColor'
      />
      <path
        d='M2.56 14.34c.45-.48.87-.85 1.78-.85 1.6 0 1.87 1.67 1.06 2.5-.43.46-1.29 1.12-2.02 1.77-.44.4-.66.6-.54.92s.45.32 1.1.32h2.1'
        stroke='currentColor'
      />
    </svg>
  )
}
