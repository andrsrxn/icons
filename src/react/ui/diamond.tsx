import type { Icon } from './types'

export const IconDiamond: Icon = ({
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
      data-slot='diamond'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.62 10.47 6.3 5.11a1 1 0 0 1 .9-.55h9.58a1 1 0 0 1 .9.54l2.7 5.37a1 1 0 0 1-.14 1.12L12.74 20a1 1 0 0 1-1.5 0l-7.48-8.42a1 1 0 0 1-.14-1.12'
        fill='currentColor'
      />
      <path
        d='M3.62 10.47 6.3 5.11a1 1 0 0 1 .9-.55h9.58a1 1 0 0 1 .9.54l2.7 5.37a1 1 0 0 1-.14 1.12L12.74 20a1 1 0 0 1-1.5 0l-7.48-8.42a1 1 0 0 1-.14-1.12Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
