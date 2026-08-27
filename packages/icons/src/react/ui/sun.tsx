import type { Icon } from './types'

export const IconSun: Icon = ({
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
      data-slot='ui-icon-sun'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle
        opacity='.2'
        cx='11.97'
        cy='11.99'
        r='4.62'
        transform='rotate(90 11.97 11.99)'
        fill='currentColor'
      />
      <circle
        cx='11.97'
        cy='11.99'
        r='4.62'
        transform='rotate(90 11.97 11.99)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.27 11.99H4.3m15.28.01h2.15m-9.77 9.64v-2.08m0-15.25V2.36m6.2 3.36 1.31-1.31M4.55 19.33l1.22-1.22m-.02-12.4-1.3-1.3m15.02 15.02-1.32-1.32'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
