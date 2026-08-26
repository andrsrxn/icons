import type { Icon } from './types'

export const IconTextLigature: Icon = ({
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
      data-slot='ui-icon-text-ligature'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M13.85 20.92h3.64m-11.62 0H9.7m6 0v-5.8c0-.95 0-1.42-.3-1.71s-.77-.3-1.7-.3h-8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.79 20.92V7.29a4.3 4.3 0 0 1 4.23-4.23c2.34 0 4.24 1.9 4.24 4.23'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
