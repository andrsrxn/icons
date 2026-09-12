import type { Icon } from './types'

export const IconShield: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-shield'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.97 12.25v5.54c0 1.98 0 2.97.6 3.23s1.33-.42 2.77-1.77l2.3-2.17c.15-.14.23-.21.29-.3s.1-.17.18-.36l2.94-6.83c.35-.83.53-1.24.4-1.62-.15-.37-.55-.57-1.36-.97l-4.22-2.06-.22-.11q-.07-.04-.18-.15l-.22-.18c-1.42-1.18-2.13-1.76-2.7-1.5-.58.28-.58 1.2-.58 3.04z'
        fill='currentColor'
      />
      <path d='M11.97 22.29V2.79' stroke='currentColor' />
      <path d='M11.97 1.57c-1.4 1.24-5.2 3.97-9.23 4.94' stroke='currentColor' />
      <path d='M11.97 1.57c1.4 1.24 5.21 3.97 9.24 4.94' stroke='currentColor' />
      <path d='M21.2 6.51c0 5.82-2.18 12.4-9.23 15.92' stroke='currentColor' />
      <path d='M2.74 6.51c0 5.82 2.19 12.4 9.23 15.92' stroke='currentColor' />
    </svg>
  )
}
