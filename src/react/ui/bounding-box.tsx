import type { Icon } from './types'

export const IconBoundingBox: Icon = ({
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
      data-slot='ui-icon-bounding-box'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle
        opacity='.2'
        cx='4.84'
        cy='19.08'
        r='2.39'
        transform='rotate(90 4.84 19.08)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='4.84'
        cy='4.97'
        r='2.39'
        transform='rotate(90 4.84 4.97)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='19.16'
        cy='19.08'
        r='2.39'
        transform='rotate(90 19.16 19.08)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='19.16'
        cy='4.97'
        r='2.39'
        transform='rotate(90 19.16 4.97)'
        fill='currentColor'
      />
      <circle
        cx='4.84'
        cy='19.08'
        r='2.39'
        transform='rotate(90 4.84 19.08)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='4.84'
        cy='4.97'
        r='2.39'
        transform='rotate(90 4.84 4.97)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='19.16'
        cy='19.08'
        r='2.39'
        transform='rotate(90 19.16 19.08)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='19.16'
        cy='4.97'
        r='2.39'
        transform='rotate(90 19.16 4.97)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.77 4.97H7.23M5.05 7.36v9.33m11.72 2.4H7.23M19.16 7.36v9.33'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
