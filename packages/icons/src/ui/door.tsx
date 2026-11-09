import type { Icon } from './types'

export const IconDoor: Icon = ({
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
      data-slot='icon-ui-door'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.11 8.68c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h1.78c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v12.7H5.1z'
        fill='currentColor'
      />
      <path
        d='M18.89 21.12V8.68c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H11.1c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v12.44'
        stroke='currentColor'
      />
      <path d='M21.18 21.39H2.82' stroke='currentColor' />
      <path d='M13.02 12h3.01' stroke='currentColor' />
    </svg>
  )
}
