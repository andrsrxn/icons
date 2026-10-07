import type { Icon } from './types'

export const IconFlagTriangleRight: Icon = ({
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
      data-slot='icon-ui-flag-triangle-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M7.33 21.61v-6.26m0 0V7.17c0-2.15 0-3.22.7-3.66s1.67.02 3.6.96l3.53 1.7c2.43 1.17 3.64 1.76 3.64 2.7s-1.21 1.53-3.64 2.7z'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M7.33 7.38c0-2.23 0-3.35.73-3.78.73-.44 1.71.08 3.68 1.13l1.88 1 1.17.6c2.3 1.16 3.44 1.75 3.44 2.67s-1.14 1.5-3.44 2.67l-1.17.6-1.88 1c-1.97 1.04-2.95 1.57-3.68 1.13s-.73-1.55-.73-3.78z'
        fill='currentColor'
      />
    </svg>
  )
}
