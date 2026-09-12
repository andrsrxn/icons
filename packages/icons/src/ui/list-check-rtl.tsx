import type { Icon } from './types'

export const IconListCheckRtl: Icon = ({
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
      data-slot='icon-ui-list-check-rtl'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M13.65 6H2.61' stroke='currentColor' />
      <path d='M13.65 12H2.61' stroke='currentColor' />
      <path d='M13.65 18H2.61' stroke='currentColor' />
      <path d='m17.13 6.1.62.77c.36.44.54.66.78.66s.42-.22.77-.66l2.18-2.7' stroke='currentColor' />
      <path
        d='m17.13 12.1.62.77c.36.44.54.66.78.66s.42-.22.77-.66l2.18-2.7'
        stroke='currentColor'
      />
      <path
        d='m17.13 18.1.62.77c.36.44.54.66.78.66s.42-.22.77-.66l2.18-2.7'
        stroke='currentColor'
      />
    </svg>
  )
}
