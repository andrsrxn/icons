import type { Icon } from './types'

export const IconInfo: Icon = ({
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
      data-slot='ui-icon-info'
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
        d='M13.57 17.66c-1 0-1.8-.45-1.8-1.96v-4.45'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.3 7.24a.53.53 0 1 1-1.06 0 .53.53 0 0 1 1.06 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
