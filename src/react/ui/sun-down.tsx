import type { Icon } from './types'

export const IconSunDown: Icon = ({
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
      data-slot='ui-icon-sun-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path d='M2.27 17.76h19.46' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        opacity='.2'
        d='M11.97 17.75c-.05.02-5.33 0-5.33 0 0-3.1 2.39-5.62 5.33-5.62s5.33 2.52 5.33 5.62z'
        fill='currentColor'
      />
      <path
        d='M6.64 17.46a5.33 5.33 0 1 1 10.66 0m-.47-7.33 1.48-1.47m1.41 5.44 2.01-.54m-17.45.54-2.01-.54m4.9-3.43L5.7 8.67m4.03-1.75c.8.8 1.2 1.2 1.66 1.34a2 2 0 0 0 1.22 0c.46-.14.86-.54 1.66-1.34M12 3.6v4.66'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
