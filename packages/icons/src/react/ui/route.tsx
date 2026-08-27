import type { Icon } from './types'

export const IconRoute: Icon = ({
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
      data-slot='ui-icon-route'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M15.75 18.35c-4.42 0-8 2.08-11.09.2-2.21-1.36-2.74-5.35-.23-6.79 5.1-2.92 9.12 3.31 14.92-.05 2.39-1.39 2.3-4.95.2-6.34-3.6-2.37-7.1 0-11.64 0'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle opacity='.2' cx='18.63' cy='18.35' r='2.77' fill='currentColor' />
      <circle cx='18.63' cy='18.35' r='2.77' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle opacity='.2' cx='4.77' cy='5.37' r='2.77' fill='currentColor' />
      <circle cx='4.77' cy='5.37' r='2.77' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
