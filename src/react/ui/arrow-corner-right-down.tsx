import type { Icon } from './types'

export const IconArrowCornerRightDown: Icon = ({
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
      data-slot='ui-icon-arrow-corner-right-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M15.5 18.2v-5.53c0-3.77 0-5.65-1.17-6.82-1.17-1.18-3.05-1.18-6.82-1.18H4.23'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m19.77 16.06-1.43 1.43c-1.34 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-1.44-1.43'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
