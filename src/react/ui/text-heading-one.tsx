import type { Icon } from './types'

export const IconTextHeadingOne: Icon = ({
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
      data-slot='ui-icon-text-heading-one'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m17.35 15.82 1.42-1.29c.72-.64 1.08-.96 1.38-.83s.3.61.3 1.58v5.35M4.18 4.03v14.74m9.1-14.74v14.74m-9.1-7.47h9.1m0-7.27v14.74m-1.45 0h2.9m-2.9-14.74h2.9m-12 0h2.9m-2.9 14.74h2.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
