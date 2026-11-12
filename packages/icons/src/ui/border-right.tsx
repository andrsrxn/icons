import type { Icon } from './types'

export const IconBorderRight: Icon = ({
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
      data-slot='icon-ui-border-right'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.2 15.28c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88H8.72c-2.83 0-4.25 0-5.12-.88s-.88-2.3-.88-5.12V8.79c0-2.82 0-4.24.88-5.12.87-.88 2.29-.88 5.12-.88h6.48c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12z'
        fill='currentColor'
      />
      <path d='M11.96 15.4V8.67' stroke='currentColor' />
      <path d='M15.32 12.04H8.6' stroke='currentColor' />
      <path
        d='M18.63 21.27a2.56 2.56 0 0 0 2.57-2.56V5.36a2.56 2.56 0 0 0-2.57-2.57'
        stroke='currentColor'
      />
      <path d='M5.35 2.74h-.07a2.6 2.6 0 0 0-2.6 2.61' stroke='currentColor' />
      <path d='M5.2 21.33h-.05a2.47 2.47 0 0 1-2.48-2.47' stroke='currentColor' />
      <path d='M2.73 10.88v2.25' stroke='currentColor' />
      <path d='M10.85 21.23h2.24' stroke='currentColor' />
      <path d='M10.85 2.75h2.24' stroke='currentColor' />
    </svg>
  )
}
