import type { Icon } from './types'

export const IconFemale: Icon = ({
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
      data-slot='ui-icon-female'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle
        opacity='.2'
        cx='12.06'
        cy='9.04'
        r='6.39'
        transform='rotate(135 12.06 9.04)'
        fill='currentColor'
      />
      <circle
        cx='12.06'
        cy='9.04'
        r='6.39'
        transform='rotate(135 12.06 9.04)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M12.06 15.48v6.22m-3.17-2.73h6.2' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
