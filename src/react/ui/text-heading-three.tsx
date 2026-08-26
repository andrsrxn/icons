import type { Icon } from './types'

export const IconTextHeadingThree: Icon = ({
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
      data-slot='ui-icon-text-heading-three'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M4.18 4.03v14.74m9.1-14.74v14.74m-9.1-7.47h9.1m0-7.27v14.74m-1.45 0h2.9m-2.9-14.74h2.9m-12 0h2.9m-2.9 14.74h2.9m12.01-3.73a2.2 2.2 0 0 1 1.75-.74c1.57 0 2.04 1.81 1.25 2.54-.8.73-1.95.57-1.95.57'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.64 19.8c.43.42.85.75 1.75.75 1.57 0 2.04-1.81 1.25-2.55-.8-.73-1.95-.56-1.95-.56'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
