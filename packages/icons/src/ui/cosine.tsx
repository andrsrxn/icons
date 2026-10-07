import type { Icon } from './types'

export const IconCosine: Icon = ({
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
      data-slot='icon-ui-cosine'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M19.4 12h2.29' stroke='currentColor' />
      <path d='M2.33 12.02h2.3' stroke='currentColor' />
      <path d='M10.85 12.02h2.3' stroke='currentColor' />
      <path d='M12 3.24c7.28 0 .8 16.07 8.4 16.75' stroke='currentColor' />
      <path d='M12 3.24c-7.23 0-.8 16.07-8.4 16.75' stroke='currentColor' />
    </svg>
  )
}
