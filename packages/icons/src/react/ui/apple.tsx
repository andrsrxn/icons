import type { Icon } from './types'

export const IconApple: Icon = ({
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
      data-slot='ui-icon-apple'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M20.6 13.4c0 4.75-2.28 8.68-8.6 7.43-5.71 1.87-8.6-2.68-8.6-7.43S5.5 4.2 12 5.94c5.43-2.38 8.6 2.7 8.6 7.44'
        fill='currentColor'
      />
      <path
        d='M3.4 13.4c0 3.68 1.74 8.25 5.56 8.05 1.26-.06 1.97-1.06 3.04-1.06s1.78 1 3.04 1.06c3.82.2 5.57-4.37 5.57-8.06 0-3.68-1.3-8.05-5.57-8.05-1.27 0-1.77.78-3.04.78s-1.77-.78-3.04-.78C4.8 5.34 3.4 9.7 3.4 13.39'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.9 13.3c-.1-.97.02-1.75.37-2.65a3.8 3.8 0 0 1 1.7-2.12M12 5.9a5 5 0 0 1 .02-2.05c.17-.88.96-1.77 2.72-1.38'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
