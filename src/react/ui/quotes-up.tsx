import type { Icon } from './types'

export const IconQuotesUp: Icon = ({
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
      data-slot='quotes-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3.7 8.22a3.44 3.44 0 1 1 6.87 0 3.44 3.44 0 0 1-6.87 0m9.73 0a3.44 3.44 0 1 1 6.87 0 3.44 3.44 0 0 1-6.87 0'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M10.57 8.32s-.15 4.39-1.07 6.73c-1.77 4.48-4.43 4.48-4.43 4.48M20.3 8.33s-.15 4.38-1.07 6.72c-1.77 4.48-4.43 4.48-4.43 4.48M3.7 8.22a3.44 3.44 0 1 1 6.87 0 3.44 3.44 0 0 1-6.87 0Zm9.73 0a3.44 3.44 0 1 1 6.87 0 3.44 3.44 0 0 1-6.87 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
