import type { Icon } from './types'

export const IconLifeBuoy: Icon = ({
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
      data-slot='ui-icon-life-buoy'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m8.3 15.54-2.37 2.42a1 1 0 0 1-1.56-.16l-1.49-2.33a1 1 0 0 1-.15-.46l-.34-4.17a1 1 0 0 1 .13-.57l2.12-3.74a1 1 0 0 1 1.5-.28l2.2 1.82a1 1 0 0 1 .3 1.1l-.87 2.5a1 1 0 0 0 0 .66l.76 2.18a1 1 0 0 1-.23 1.03m7.63 0 2.37 2.42a1 1 0 0 0 1.56-.16l1.5-2.33a1 1 0 0 0 .14-.46l.34-4.17a1 1 0 0 0-.13-.57L19.6 6.53a1 1 0 0 0-1.5-.28l-2.2 1.82a1 1 0 0 0-.3 1.1l.88 2.5a1 1 0 0 1 0 .66l-.77 2.18a1 1 0 0 0 .23 1.03'
        fill='currentColor'
      />
      <circle
        cx='11.99'
        cy='12'
        r='4.34'
        transform='rotate(90 11.99 12)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='11.99'
        cy='12'
        r='9.41'
        transform='rotate(90 11.99 12)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.58 8.59 5.43 5.44M18.5 18.51l-3.32-3.32m3.43-9.8-3.37 3.37m-6.5 6.5L5.48 18.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
