import type { Icon } from './types'

export const IconListOrderedRtl: Icon = ({
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
      data-slot='icon-ui-list-ordered-rtl'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M14.83 6H2.72' stroke='currentColor' />
      <path d='M14.83 12H2.72' stroke='currentColor' />
      <path d='M14.83 18H2.72' stroke='currentColor' />
      <path
        d='m18.34 6.52.84-.77c.71-.65 1.07-.98 1.37-.85s.3.62.3 1.6v4.01'
        stroke='currentColor'
      />
      <path
        d='M18.3 14.34c.45-.48.88-.85 1.79-.85 1.6 0 1.86 1.67 1.06 2.5-.43.46-1.3 1.12-2.02 1.77-.44.4-.67.6-.54.92.12.32.44.32 1.1.32h2.1'
        stroke='currentColor'
      />
    </svg>
  )
}
