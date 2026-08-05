import type { Icon } from './types'

export const IconVariable: Icon = ({
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
      data-slot='variable'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16.197 4s3.762 2.069 3.762 8.069c0 6-3.762 7.931-3.762 7.931M7.79 4s-3.76 2.069-3.76 8.069c0 6 3.762 7.931 3.762 7.931m.657-4.728c3.133-.317 4-6.162 7.127-6.544m0 6.544h-1.083L9.78 8.728H8.448'
      />
    </svg>
  )
}
