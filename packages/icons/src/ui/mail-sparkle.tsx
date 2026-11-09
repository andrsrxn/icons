import type { Icon } from './types'

export const IconMailSparkle: Icon = ({
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
      data-slot='icon-ui-mail-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.09 8.78c0-1.96 0-2.94.6-3.2s1.32.4 2.76 1.73l5.35 4.95c.64.6.96.9 1.35.9s.72-.3 1.36-.9l5.38-4.96c1.44-1.32 2.16-1.99 2.76-1.72.6.26.6 1.24.6 3.2v9.1l-3.37-2.59-2.56 2.41 2.71 2.3H10.1c-3.77 0-5.66 0-6.83-1.17S2.09 15.77 2.09 12z'
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
      <path d='M18.93 14.02c0 1.77-1.9 3.68-3.68 3.68' stroke='currentColor' />
      <path d='M18.93 14.02c0 1.77 1.91 3.68 3.68 3.68' stroke='currentColor' />
      <path d='M18.93 21.38c0-1.73-1.92-3.68-3.68-3.68' stroke='currentColor' />
      <path d='M18.93 21.38c0-1.76 1.93-3.68 3.68-3.68' stroke='currentColor' />
    </svg>
  )
}
