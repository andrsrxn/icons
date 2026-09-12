import type { Icon } from './types'

export const IconSkipBackward: Icon = ({
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
      data-slot='icon-ui-skip-backward'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.22 11.9c0-4.75 0-7.12-1.53-7.98s-3.55.38-7.6 2.85l-.17.11C8.17 9.18 6.3 10.32 6.3 12s1.87 2.83 5.62 5.12l.17.1c4.05 2.48 6.07 3.72 7.6 2.86s1.53-3.23 1.53-7.97z'
        fill='currentColor'
      />
      <path
        d='M21.22 11.9c0-4.75 0-7.12-1.53-7.98s-3.55.38-7.6 2.85l-.17.11C8.17 9.18 6.3 10.32 6.3 12s1.87 2.83 5.62 5.12l.17.1c4.05 2.48 6.07 3.72 7.6 2.86s1.53-3.23 1.53-7.97z'
        stroke='currentColor'
      />
      <path d='M2.77 3.8v16.4' stroke='currentColor' />
    </svg>
  )
}
