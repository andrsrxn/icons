import type { Icon } from './types'

export const IconArrowsHorizontal: Icon = ({
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
      data-slot='ui-icon-arrows-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M2.83 12h18.34m-3.66-4.82 2 1.99c1.33 1.33 2 2 2 2.83 0 .82-.67 1.5-2 2.83l-2 1.99M6.66 7.18 4.67 9.17c-1.34 1.33-2 2-2 2.83 0 .82.66 1.5 2 2.83l1.99 1.99'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
