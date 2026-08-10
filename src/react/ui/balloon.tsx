import type { Icon } from './types'

export const IconBalloon: Icon = ({
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
      data-slot='balloon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.48 8.84c0 2.73-2.4 7.52-5.14 7.52s-4.76-4.8-4.76-7.52a4.95 4.95 0 0 1 9.9 0'
        fill='currentColor'
      />
      <path
        d='M17.62 8.97c0 2.81-2.28 7.39-5.1 7.39-2.8 0-5.08-4.58-5.08-7.39a5.09 5.09 0 1 1 10.18 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M12.68 16.36c.48.8.3 1.64-.58 2.29-.99.73-2.42-.1-3.7.27-1.24.35-1.47 1.2-1.67 1.96M12.4 6.67c.54.06 1.2.24 1.7.76.57.56.74 1.31.74 1.9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
