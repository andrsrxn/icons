import type { Icon } from './types'

export const IconDoorOpen: Icon = ({
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
      data-slot='icon-ui-door-open'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.37 4c1.61 0 2.42 0 3.04.3a3 3 0 0 1 1.39 1.38c.3.62.3 1.43.3 3.05V21.6h-4.73z'
        fill='currentColor'
      />
      <path d='m9.87 12.48 1.73-.36' stroke='currentColor' />
      <path
        d='M14.37 21.32V7.25c0-2.33 0-3.5-.61-4.2a2.5 2.5 0 0 0-.87-.65c-.85-.38-1.97-.05-4.2.62-1.58.47-2.37.7-2.9 1.24a3 3 0 0 0-.53.71c-.36.67-.36 1.49-.36 3.13v13.22'
        stroke='currentColor'
      />
      <path d='M21 21.61H3' stroke='currentColor' />
      <path
        d='M19.1 21.32V8.73c0-1.62 0-2.43-.3-3.05a3 3 0 0 0-1.4-1.38c-.6-.3-1.42-.3-3.03-.3'
        stroke='currentColor'
      />
    </svg>
  )
}
