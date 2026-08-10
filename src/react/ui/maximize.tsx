import type { Icon } from './types'

export const IconMaximize: Icon = ({
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
      data-slot='maximize'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M14.92 3.7h1.38c1.89 0 2.83 0 3.42.58s.58 1.53.58 3.41v1.4M14.92 20.3h1.38c1.89 0 2.83 0 3.42-.58s.58-1.53.58-3.41v-1.4M9.08 3.7H7.7c-1.89 0-2.83 0-3.42.58S3.7 5.8 3.7 7.69v1.4M9.08 20.3H7.7c-1.89 0-2.83 0-3.42-.58s-.58-1.53-.58-3.41v-1.4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
