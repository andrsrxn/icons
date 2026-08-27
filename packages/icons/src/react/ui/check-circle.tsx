import type { Icon } from './types'

export const IconCheckCircle: Icon = ({
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
      data-slot='ui-icon-check-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='9.43'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='12'
        r='9.43'
        transform='rotate(90 12 12)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m7.55 12.71 1.3 1.6c.73.88 1.09 1.32 1.56 1.32.48 0 .84-.44 1.55-1.32l4.49-5.54'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
