import type { Icon } from './types'

export const IconFlagTriangleLeft: Icon = ({
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
      data-slot='icon-ui-flag-triangle-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M16.69 21.61v-6.26m0 0V7.17c0-2.15 0-3.22-.7-3.66s-1.68.02-3.6.96l-3.53 1.7c-2.43 1.17-3.64 1.76-3.64 2.7s1.21 1.53 3.64 2.7z'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M16.69 7.38c0-2.23 0-3.35-.73-3.78-.73-.44-1.71.08-3.68 1.13l-1.88 1-1.18.6C6.93 7.49 5.78 8.08 5.78 9s1.15 1.5 3.44 2.67l1.18.6 1.88 1c1.97 1.04 2.95 1.57 3.68 1.13s.73-1.55.73-3.78z'
        fill='currentColor'
      />
    </svg>
  )
}
