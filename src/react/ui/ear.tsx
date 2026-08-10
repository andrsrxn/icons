import type { Icon } from './types'

export const IconEar: Icon = ({
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
      data-slot='ear'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M6.42 7.92c1.11-3.41 3.54-4.4 6.12-4.4 2.93 0 5.73 1.3 5.82 4.4.14 4.25-2.53 4.78-2.9 7.2-.35 2.31-.1 2.87-.64 3.86-.82 1.54-2.71 1.72-4.17 1.2-1.52-.56-1.98-1.91-2.24-3.1'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.41 11.76c.8.42 1.7.08 2.03-.85.33-.94-.37-1.65-1.25-1.9.09-1.48 1.92-2.76 3.39-2.76 1.59 0 2.45 1 2.54 2.31.19 2.45-1.18 3.1-2.29 4.88 0 0-.6.87-.35 2.12'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
