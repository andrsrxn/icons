import type { Icon } from './types'

export const IconTextHeadingFive: Icon = ({
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
      data-slot='ui-icon-text-heading-five'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M4.18 4.03v14.74m9.1-14.74v14.74m-9.1-7.47h9.1m0-7.27v14.74m-1.45 0h2.9m-12 0h2.9m6.2-14.74h2.9m-12 0h2.9M17.78 21h1.6a1.76 1.76 0 1 0 0-3.53h-1.82q0 0 0 0v-1.52c0-.5 0-.74.08-.93a1 1 0 0 1 .51-.51c.2-.09.44-.09.93-.09h1.7'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
