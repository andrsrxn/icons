import type { Icon } from './types'

export const IconBoundingBox: Icon = ({
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
      data-slot='bounding-box'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M7.5 5.49a2.01 2.01 0 1 1-4.02 0 2.01 2.01 0 0 1 4.02 0m0 13.02a2.01 2.01 0 1 1-4.02 0 2.01 2.01 0 0 1 4.02 0m13.02 0a2.01 2.01 0 1 1-4.02 0 2.01 2.01 0 0 1 4.02 0m0-13.02a2.01 2.01 0 1 1-4.02 0 2.01 2.01 0 0 1 4.02 0'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M7.5 5.49a2 2 0 0 1-2.01 2m2-2a2.01 2.01 0 1 0-2 2m2-2h9.01m-11.01 2v9m2 2.02a2.01 2.01 0 1 1-4.01 0 2.01 2.01 0 0 1 4.02 0Zm0 0h9.01m0 0a2.01 2.01 0 1 0 4.02 0 2.01 2.01 0 0 0-4.02 0ZM18.51 7.5a2.01 2.01 0 1 0-2-2.01m2 2a2 2 0 0 1-2-2m2 2v9'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
