import type { Icon } from './types'

export const IconHashtag: Icon = ({
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
      data-slot='hashtag'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M13.83 15H8.78a1 1 0 0 1-.92-1.38l1.66-4a1 1 0 0 1 .93-.62h4.84a1 1 0 0 1 .94 1.35l-1.47 4a1 1 0 0 1-.93.65'
        fill='currentColor'
      />
      <path
        d='m5.5 20 6.02-16m.98 16 6-16M20 9H4m16 6H4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
