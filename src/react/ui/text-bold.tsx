import type { Icon } from './types'

export const IconTextBold: Icon = ({
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
      data-slot='ui-icon-text-bold'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6.77 19.02V3.87l6.73-.29 3.05 3.16-1.15 4.93 2.77 4.55-2.77 4-6.91.22z'
        fill='currentColor'
      />
      <path
        d='M9.37 3.57h3.46a3.9 3.9 0 0 1 0 7.79h-2.02m0 0h2.71a4.54 4.54 0 1 1 0 9.09H9.61'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.64 3.57c-1 0-1.5 0-1.9.18a2 2 0 0 0-1 1c-.17.4-.17.9-.17 1.9v10.72c0 1 0 1.5.17 1.89a2 2 0 0 0 1 1c.4.18.9.18 1.9.18'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
