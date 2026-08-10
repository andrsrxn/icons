import type { Icon } from './types'

export const IconTextLineHeight: Icon = ({
  size = 24,
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
      data-slot='text-line-height'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M10.9 6h9.36m-9.37 6h9.37m-9.37 6h9.37M3.64 6.74l.84-.84c.67-.67 1-1 1.41-1 .42 0 .75.33 1.42 1l.85.84M3.64 17.25l.84.85c.67.67 1 1 1.41 1 .42 0 .75-.33 1.42-1l.85-.85M5.9 5.28v4.93m0 3.61v4.93'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
