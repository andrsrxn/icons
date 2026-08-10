import type { Icon } from './types'

export const IconUmbrella: Icon = ({
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
      data-slot='umbrella'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5.5 6.57c1.22-1.86 4.48-2.63 5.86-2.74-1.34 2.05-1.9 5.8-2.06 7.66-.45-.4-1.68-1.18-2.5-1.14-1.3.05-2.44.77-3.13 1.14.03-.9.6-3.06 1.82-4.92m13.01 0c-1.22-1.86-4.48-2.63-5.86-2.74 1.34 2.05 1.9 5.8 2.06 7.66.45-.4 1.68-1.18 2.5-1.14 1.3.05 2.44.77 3.13 1.14-.03-.9-.6-3.06-1.82-4.92'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M12 3.83c8.33 0 8.33 8.08 8.33 8.08s-1.8-1.34-3.12-1.34c-1.15 0-2.6 1.34-2.6 1.34s-1.46-1.34-2.61-1.34-2.6 1.34-2.6 1.34-1.46-1.34-2.6-1.34c-1.34 0-3.13 1.34-3.13 1.34s0-8.08 8.33-8.08m0 0C9.97 5.51 9.42 9.25 9.4 10.9M12 3.83c2.03 1.68 2.58 5.42 2.6 7.07m-2.6 0v6.9c0 2.22-1.01 3-2.6 3-1.6 0-2.6-1.12-2.6-1.97'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
