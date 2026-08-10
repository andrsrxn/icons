import type { Icon } from './types'

export const IconSmileyNeutral: Icon = ({
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
      data-slot='smiley-neutral'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M20.36 12a8.36 8.36 0 1 1-16.72 0 8.36 8.36 0 0 1 16.72 0'
        fill='currentColor'
      />
      <path
        d='M9.91 9.49a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0m5.36 0a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0'
        fill='currentColor'
      />
      <path
        d='M9 15h6m5.36-3a8.36 8.36 0 1 1-16.72 0 8.36 8.36 0 0 1 16.72 0ZM9.9 9.49a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0Zm5.36 0a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
