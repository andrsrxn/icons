import type { Icon } from './types'

export const IconMapPinPlus: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='map-pin-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M13.146 19.827c1.674-2.507 4.59-7.313 4.59-10.37 0-3.633-2.568-5.737-5.736-5.737-3.168 0-5.737 2.068-5.737 5.737 0 3.125 2.908 7.89 4.583 10.376.56.83 1.743.827 2.3-.006Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.467 9.264h5.066M12 6.732v5.065m5.737-2.34c0 3.057-2.917 7.863-4.591 10.37a1.371 1.371 0 0 1-2.3.006c-1.675-2.486-4.583-7.25-4.583-10.376 0-3.67 2.569-5.737 5.737-5.737s5.737 2.104 5.737 5.737Z'
      />
    </svg>
  )
}
