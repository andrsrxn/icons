import type { Icon } from './types'

export const IconVariable: Icon = ({
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
      data-slot='ui-icon-variable'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M6.25 20.77C4.27 17.92 3.57 15.63 3.57 12s.7-5.92 2.68-8.77m11.5 17.54c1.98-2.85 2.68-5.14 2.68-8.77s-.7-5.92-2.68-8.77M8.44 15.6c1.83-.3 2.95-1.8 3.73-3.6.74-1.7 1.66-3.15 3.47-3.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.65 15.6h-.47c-.55 0-.83 0-1.06-.13s-.37-.37-.66-.84l-1.56-2.64-1.37-2.48c-.28-.5-.42-.75-.66-.89-.23-.14-.52-.14-1.1-.14h-.36'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
