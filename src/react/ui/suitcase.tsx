import type { Icon } from './types'

export const IconSuitcase: Icon = ({
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
      data-slot='suitcase'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' fill='currentColor' d='M7.62 8.5h8.75v10H7.62z' />
      <path
        d='M14.82 7.9A2.86 2.86 0 0 0 12 5.5c-1.25 0-2.48.76-2.82 2.4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <rect
        x='3.75'
        y='8.5'
        width='16.51'
        height='10'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path d='M7.47 18V9m9.06 9V9' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}
