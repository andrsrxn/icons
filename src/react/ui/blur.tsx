import type { Icon } from './types'

export const IconBlur: Icon = ({
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
      data-slot='blur'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12 20.25V3.43S5.46 7.9 5.46 14.1c0 3.4 2.93 6.16 6.54 6.16'
        fill='#000'
      />
      <path
        d='M12 20.25c3.61 0 6.54-2.76 6.54-6.16C18.54 7.98 12 3.43 12 3.43S5.46 7.9 5.46 14.1c0 3.4 2.93 6.16 6.54 6.16Z'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path d='M12 3.75V20' stroke='#000' strokeWidth='1.5' strokeLinecap='round' />
      <path
        d='M12.63 7.56a.75.75 0 0 0-1.06 1.06l.53-.53zm5.38 7.5A.75.75 0 1 0 19.07 14l-.53.53zM12.1 8.1l-.53.53 3.22 3.22.53-.53.53-.53-3.22-3.22zm3.22 3.22-.53.53L18 15.06l.53-.53.53-.53-3.22-3.22zm-2.69 1.57a.75.75 0 0 0-1.06 1.06l.53-.53zm3.42 5.54a.75.75 0 0 0 1.06-1.06l-.53.53zm-3.95-5.01-.53.53 2.24 2.24.53-.53.53-.53-2.24-2.24zm2.24 2.24-.53.53 2.24 2.24.53-.53.53-.53-2.24-2.24z'
        fill='#000'
      />
    </svg>
  )
}
