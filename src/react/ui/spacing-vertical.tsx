import type { Icon } from './types'

export const IconSpacingVertical: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-spacing-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5.8 4.6v14.54m3.5-2.26-.66.66c-1.33 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-.67-.66m6.91-9.84-.58-.58c-1.33-1.34-2-2-2.83-2s-1.5.66-2.83 2l-.59.58M21.61 6h-9.25m9.25 6h-9.25m9.25 6h-9.25'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
