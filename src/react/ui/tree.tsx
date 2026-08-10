import type { Icon } from './types'

export const IconTree: Icon = ({
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
      data-slot='tree'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.26 16.17H8.74a2 2 0 0 1-2-2V8.84a5.25 5.25 0 0 1 10.52 0v5.34a2 2 0 0 1-2 2'
        fill='currentColor'
      />
      <path
        d='M12 20.23V8m0 3 2.4-1.39M12 12.7l-2.4-1.38m-.64 8.92h6.08m-6.3-4.06h6.52a2 2 0 0 0 2-2V8.83a5.25 5.25 0 0 0-10.52 0v5.35c0 1.1.9 2 2 2Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
