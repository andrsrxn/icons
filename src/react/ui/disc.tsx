import type { Icon } from './types'

export const IconDisc: Icon = ({
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
      data-slot='disc'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17m3-8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0'
        fill='currentColor'
      />
      <path
        d='M6.52 12a5.47 5.47 0 0 1 5.47-5.48m.02 10.96a5.47 5.47 0 0 0 5.47-5.47M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-5.88 0a2.62 2.62 0 1 1-5.24 0 2.62 2.62 0 0 1 5.24 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
