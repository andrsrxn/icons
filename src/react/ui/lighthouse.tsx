import type { Icon } from './types'

export const IconLighthouse: Icon = ({
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
      data-slot='lighthouse'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fill='currentColor'
        d='M9.65 13.07h4.71v3.74H9.65zm.15-8.91h4.42v4.37H9.8z'
      />
      <path
        d='M8.14 9.04h7.72m-6.07 3.83h4.42M7.05 3.95l-1.17-.49m11.07.49 1.17-.49M6.74 6.58l-1.3.15m11.82-.15 1.3.15M9.38 16.8h5.24M6.1 20.36h11.8'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <circle cx='12' cy='6.42' r='2.62' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M10.12 9.04h3.86l1.37 11.32h-6.7z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
