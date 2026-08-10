import type { Icon } from './types'

export const IconRouter: Icon = ({
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
      data-slot='router'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='3.68'
        y='13.13'
        width='16.65'
        height='6.23'
        rx='2'
        fill='currentColor'
      />
      <path
        d='M9.64 7.9s.8-.5 2.36-.5 2.36.5 2.36.5M8 5.53s1.35-.88 4-.88 4 .88 4 .88'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <rect
        x='3.68'
        y='13.13'
        width='16.65'
        height='6.23'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M12 13.13v-3m5.5 6.11h-3'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path d='M7.82 16.24a.41.41 0 1 1-.82 0 .41.41 0 0 1 .82 0' fill='currentColor' />
      <path
        d='M7.82 16.24a.41.41 0 1 1-.82 0 .41.41 0 0 1 .82 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
