import type { Icon } from './types'

export const IconInfo: Icon = ({
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
      data-slot='info'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M20.434 12a8.434 8.434 0 1 1-16.868 0 8.434 8.434 0 0 1 16.868 0Z'
        opacity='.2'
      />
      <path fill='currentColor' d='M12.271 7.93a.52.52 0 1 1-1.042 0 .52.52 0 0 1 1.042 0Z' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11.75 11.179v4.637c0 .824.579 1.384 1.482 1.384M12 20.434a8.434 8.434 0 1 0 0-16.868 8.434 8.434 0 0 0 0 16.868Zm.271-12.504a.52.52 0 1 1-1.042 0 .52.52 0 0 1 1.042 0Z'
      />
    </svg>
  )
}
