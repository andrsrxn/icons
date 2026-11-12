import type { Icon } from './types'

export const IconBorderNone: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-border-none'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.24 15.28c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88H8.76c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.79c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h6.48c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12z'
        fill='currentColor'
      />
      <path d='M12 15.4V8.67' stroke='currentColor' />
      <path d='M15.37 12.04H8.63' stroke='currentColor' />
      <path d='M5.39 2.74h-.06a2.6 2.6 0 0 0-2.61 2.61' stroke='currentColor' />
      <path d='M18.61 2.74h.06a2.6 2.6 0 0 1 2.61 2.61' stroke='currentColor' />
      <path d='M5.25 21.33h-.06a2.47 2.47 0 0 1-2.47-2.47' stroke='currentColor' />
      <path d='M18.75 21.33h.06c1.37 0 2.47-1.1 2.47-2.47' stroke='currentColor' />
      <path d='M2.78 10.88v2.25' stroke='currentColor' />
      <path d='M21.24 10.88v2.25' stroke='currentColor' />
      <path d='M10.9 21.23h2.24' stroke='currentColor' />
      <path d='M10.9 2.75h2.24' stroke='currentColor' />
    </svg>
  )
}
