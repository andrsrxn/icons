import type { Icon } from './types'

export const IconShoppingCart: Icon = ({
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
      data-slot='ui-icon-shopping-cart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M20.02 14.1c1.01-2.55 1.51-3.83 1.2-4.83a3 3 0 0 0-1-1.46c-.81-.66-2.18-.66-4.92-.66H9.52c-2.42 0-3.64 0-4.43.57a3 3 0 0 0-1.01 1.3c-.37.91-.07 2.09.52 4.44.37 1.5.56 2.25 1.02 2.79a3 3 0 0 0 .95.74c.63.31 1.4.31 2.95.31h5.78c1.36 0 2.04 0 2.62-.25a3 3 0 0 0 .9-.62c.45-.44.7-1.07 1.2-2.34'
        fill='currentColor'
      />
      <path
        d='M20.02 14.1c1.01-2.55 1.51-3.83 1.2-4.83a3 3 0 0 0-1-1.46c-.81-.66-2.18-.66-4.92-.66H4.16l.68 4.98c.35 2.46.52 3.7 1.36 4.44.85.73 2.1.73 4.59.73h4.51c1.36 0 2.04 0 2.62-.25a3 3 0 0 0 .9-.62c.45-.44.7-1.07 1.2-2.34M4.5 9.69l-.6-4.13a2.3 2.3 0 0 0-2.3-1.99'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='7.98'
        cy='19.04'
        r='1.74'
        transform='rotate(90 7.98 19.04)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='16.53'
        cy='19.04'
        r='1.74'
        transform='rotate(90 16.53 19.04)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
