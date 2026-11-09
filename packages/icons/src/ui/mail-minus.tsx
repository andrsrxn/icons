import type { Icon } from './types'

export const IconMailMinus: Icon = ({
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
      data-slot='icon-ui-mail-minus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.75 8.64c0-1.9 0-2.86.6-3.12.58-.27 1.3.36 2.73 1.62l5.6 4.96c.63.55.95.83 1.33.83s.7-.28 1.32-.84l5.6-4.94c1.42-1.26 2.14-1.9 2.73-1.63.59.26.59 1.22.59 3.13V12c0 3.77 0 5.66-1.17 6.83C19.9 20 18.02 20 14.25 20h-4.5c-3.77 0-5.65 0-6.83-1.17S1.75 15.77 1.75 12z'
        fill='currentColor'
      />
      <path
        d='M12.5 20H9.74c-3.77 0-5.65 0-6.83-1.17S1.75 15.77 1.75 12s0-5.66 1.17-6.83C4.1 4 5.98 4 9.75 4h4.5c3.77 0 5.65 0 6.83 1.17s1.17 3.06 1.17 6.83'
        stroke='currentColor'
      />
      <path
        d='m3.34 5.1 4.47 4.5c2 2.02 3 3.03 4.26 3.03 1.24 0 2.25-1 4.25-3.02l4.49-4.5'
        stroke='currentColor'
      />
      <path d='M16.34 16.9h6.3' stroke='currentColor' />
    </svg>
  )
}
