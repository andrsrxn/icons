import type { Icon } from './types'

export const IconExclude: Icon = ({
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
      data-slot='icon-ui-exclude'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.85 13.83c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h2.24v2.22c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.85z'
        fill='currentColor'
      />
      <path
        d='M8.95 16.05c2.94 0 4.4 0 5.45-.73a4 4 0 0 0 .95-.96c.74-1.03.74-2.5.74-5.44v0c0-2.94 0-4.41-.74-5.45a4 4 0 0 0-.95-.95c-1.04-.74-2.51-.74-5.45-.74v0c-2.94 0-4.4 0-5.45.74a4 4 0 0 0-.95.95c-.74 1.04-.74 2.5-.74 5.45v0c0 2.94 0 4.4.74 5.44a4 4 0 0 0 .95.96c1.04.73 2.51.73 5.45.73'
        stroke='currentColor'
      />
      <path
        d='M15.05 22.22c2.94 0 4.4 0 5.45-.74a4 4 0 0 0 .95-.95c.74-1.04.74-2.5.74-5.45v0c0-2.94 0-4.4-.74-5.44a4 4 0 0 0-.95-.96c-1.04-.73-2.51-.73-5.45-.73v0c-2.94 0-4.4 0-5.45.73a4 4 0 0 0-.95.96c-.74 1.03-.74 2.5-.74 5.44v0c0 2.94 0 4.41.74 5.45a4 4 0 0 0 .95.95c1.04.74 2.51.74 5.45.74'
        stroke='currentColor'
      />
    </svg>
  )
}
