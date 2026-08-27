import type { Icon } from './types'

export const IconPyramid: Icon = ({
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
      data-slot='ui-icon-pyramid'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='M12 21.7V1.82l8.77 13.3z' fill='currentColor' />
      <path
        d='M12 21.4V2.88m-3.42 3.3-3.53 5.81c-.87 1.43-1.3 2.14-1.17 2.88s.78 1.26 2.08 2.31l3.53 2.85h0c1.2.97 1.8 1.46 2.51 1.46s1.3-.49 2.51-1.46h0l3.53-2.85c1.3-1.05 1.95-1.57 2.08-2.31s-.3-1.45-1.17-2.88l-3.53-5.81c-1.53-2.52-2.3-3.77-3.42-3.77s-1.89 1.25-3.42 3.77'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
