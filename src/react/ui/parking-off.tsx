import type { Icon } from './types'

export const IconParkingOff: Icon = ({
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
      data-slot='parking-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='12' r='8.43' fill='currentColor' />
      <circle cx='12' cy='12' r='8.43' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M4.03 2.97a.75.75 0 0 0-1.06 1.06l.53-.53zm15.94 18.06a.75.75 0 1 0 1.06-1.06l-.53.53zM3.5 3.5l-.53.53 8.5 8.5L12 12l.53-.53-8.5-8.5zM12 12l-.53.53 8.5 8.5.53-.53.53-.53-8.5-8.5z'
        fill='currentColor'
      />
      <path
        d='M9.36 17.22v-4.36m0 0V9.27c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h1.74c1.94 0 2.5 1.33 2.5 2.8s-.53 2.8-2.5 2.8z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
