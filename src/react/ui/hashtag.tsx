import type { Icon } from './types'

export const IconHashtag: Icon = ({
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
      data-slot='ui-icon-hashtag'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M4.18 8.21h17.53M2.22 15.22h17.53m-6.01 5.25 4.54-16.94M5.75 20.47l4.53-16.94'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path opacity='.2' d='m14.94 15.15 1.75-6.94H8.84l-1.48 6.94z' fill='currentColor' />
    </svg>
  )
}
