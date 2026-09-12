import type { Icon } from './types'

export const IconSkipForward: Icon = ({
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
      data-slot='icon-ui-skip-forward'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.77 11.9c0-4.75 0-7.12 1.53-7.98 1.54-.86 3.56.38 7.6 2.85l.18.11c3.74 2.3 5.61 3.44 5.61 5.12s-1.87 2.83-5.61 5.12l-.18.1c-4.04 2.48-6.06 3.72-7.6 2.86-1.53-.86-1.53-3.23-1.53-7.97z'
        fill='currentColor'
      />
      <path
        d='M2.77 11.9c0-4.75 0-7.12 1.53-7.98 1.54-.86 3.56.38 7.6 2.85l.18.11c3.74 2.3 5.61 3.44 5.61 5.12s-1.87 2.83-5.61 5.12l-.18.1c-4.04 2.48-6.06 3.72-7.6 2.86-1.53-.86-1.53-3.23-1.53-7.97z'
        stroke='currentColor'
      />
      <path d='M21.22 3.8v16.4' stroke='currentColor' />
    </svg>
  )
}
