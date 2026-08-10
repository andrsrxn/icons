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
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
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
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.15 19.83c1.67-2.51 4.59-7.32 4.59-10.37 0-3.64-2.57-5.74-5.74-5.74S6.26 5.79 6.26 9.46c0 3.12 2.91 7.89 4.59 10.37.56.83 1.74.83 2.3 0'
        fill='currentColor'
      />
      <path
        d='M9.47 9.26h5.06M12 6.73v5.07m5.74-2.34c0 3.05-2.92 7.86-4.6 10.37-.55.83-1.73.83-2.3 0-1.67-2.48-4.58-7.25-4.58-10.37 0-3.67 2.57-5.74 5.74-5.74s5.74 2.1 5.74 5.74Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
