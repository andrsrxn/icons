import type { Icon } from './types'

export const IconShield: Icon = ({
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
      data-slot='shield'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M11.997 17.94V5.61a1 1 0 0 0-1.52-.854l-2.613 1.59a1 1 0 0 1-.173.084L4.562 7.585a1 1 0 0 0-.57 1.34l2.658 6.061a1 1 0 0 0 .217.314l3.43 3.354c.634.62 1.7.17 1.7-.715Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11.997 20.125V3.958m-.627.21c-.744.562-2.03 1.503-3.192 2.196-1.054.628-2.386 1.033-3.287 1.258-.551.137-.913.698-.75 1.259.393 1.357 1.25 3.84 2.775 6.182a19.613 19.613 0 0 0 4.564 4.888.857.857 0 0 0 1.034 0 19.61 19.61 0 0 0 4.564-4.888c1.526-2.343 2.382-4.825 2.775-6.182.163-.561-.199-1.122-.75-1.26-.901-.224-2.233-.629-3.287-1.257-1.162-.693-2.448-1.634-3.192-2.196-.37-.28-.884-.28-1.254 0Z'
      />
    </svg>
  )
}
