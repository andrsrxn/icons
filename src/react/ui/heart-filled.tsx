import type { Icon } from './types'

export const IconHeartFilled: Icon = ({
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
      data-slot='ui-icon-heart-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M16.87 4a5.8 5.8 0 0 0-3.83 1.6c-.57.52-.85.77-1.04.77s-.47-.25-1.04-.76A5.8 5.8 0 0 0 7.13 4c-3.11 0-5.45 3.55-4.44 7.3.9 3.38 5.82 6.2 8.51 8.67.4.37.6.56.8.56s.4-.19.8-.56c2.69-2.48 7.6-5.3 8.51-8.67 1-3.75-1.33-7.3-4.44-7.3'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
