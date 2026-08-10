import type { Icon } from './types'

export const IconBinary: Icon = ({
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
      data-slot='binary'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3.74 5.69a1.98 1.98 0 0 1 3.95 0v3a1.98 1.98 0 1 1-3.95 0zm12.57 0a1.98 1.98 0 1 1 3.95 0v3a1.98 1.98 0 1 1-3.95 0zm-6.29 9.61a1.98 1.98 0 0 1 3.96 0v2.99a1.98 1.98 0 0 1-3.96 0z'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M12.66 10.4V3.7l-2.64 2.64M6.37 20v-6.68l-2.63 2.63M19.44 20v-6.68l-2.63 2.63m-11.1-5.3a1.97 1.97 0 0 1-1.97-1.97v-3a1.98 1.98 0 0 1 3.95 0v3c0 1.1-.89 1.98-1.98 1.98m12.58 0c-1.1 0-1.98-.88-1.98-1.97v-3a1.98 1.98 0 1 1 3.95 0v3c0 1.1-.88 1.98-1.97 1.98M12 20.27c-1.1 0-1.98-.88-1.98-1.97v-3a1.98 1.98 0 0 1 3.96 0v3c0 1.09-.89 1.97-1.98 1.97'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
