import type { Icon } from './types'

export const IconMailPlus: Icon = ({
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
      data-slot='icon-ui-mail-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.8 8.6c0-1.89 0-2.84.58-3.1.59-.27 1.3.35 2.73 1.6l5.7 4.97c.64.55.96.83 1.33.83s.7-.28 1.32-.84l5.45-4.87c1.44-1.28 2.15-1.92 2.75-1.66.59.27.59 1.23.59 3.15v8.81h-3.22V20H9.8c-3.77 0-5.65 0-6.82-1.17C1.8 17.66 1.8 15.77 1.8 12z'
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
      <path d='M19.31 20.85v-6.3' stroke='currentColor' />
      <path d='M16.16 17.7h6.3' stroke='currentColor' />
    </svg>
  )
}
