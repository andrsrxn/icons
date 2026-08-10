import type { Icon } from './types'

export const IconParking: Icon = ({
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
      data-slot='parking'
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
        d='M9.57 16.9v-4.22m0 0V9.27c0-.94 0-1.41.29-1.7.3-.3.76-.3 1.7-.3h1.63c1.86 0 2.42 1.29 2.42 2.7s-.52 2.7-2.42 2.7z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
