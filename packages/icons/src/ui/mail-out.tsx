import type { Icon } from './types'

export const IconMailOut: Icon = ({
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
      data-slot='icon-ui-mail-out'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.79 8.64c0-1.88 0-2.82.58-3.08s1.3.34 2.72 1.56l5.78 4.96c.63.55.95.82 1.33.81.37 0 .69-.28 1.3-.84l5.41-4.85c1.43-1.28 2.15-1.93 2.74-1.66.6.26.6 1.23.6 3.15v3.34c0 3.76 0 5.64-1.17 6.8-1.17 1.18-3.04 1.19-6.8 1.2l-4.46.02c-3.78.01-5.68.02-6.85-1.15-1.18-1.17-1.18-3.07-1.18-6.85z'
        fill='currentColor'
      />
      <path
        d='M12.13 20H9.75c-3.77 0-5.65 0-6.83-1.17S1.75 15.77 1.75 12s0-5.66 1.17-6.83C4.1 4 5.98 4 9.75 4h5.45c2.85 0 4.28 0 5.3.7a4 4 0 0 1 1.05 1.05c.7 1.02.7 2.44.7 5.3'
        stroke='currentColor'
      />
      <path
        d='m3.34 5.1 4.47 4.5c2 2.02 3 3.03 4.26 3.03 1.24 0 2.25-1 4.25-3.02l4.49-4.5'
        stroke='currentColor'
      />
      <path
        d='m22.52 18.81-.06.07c-1.34 1.33-2 2-2.83 2s-1.5-.67-2.83-2l-.07-.07'
        stroke='currentColor'
      />
      <path d='M19.63 14.34v6.53' stroke='currentColor' />
    </svg>
  )
}
