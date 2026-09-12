import type { Icon } from './types'

export const IconChefHat: Icon = ({
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
      data-slot='icon-ui-chef-hat'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' fill='currentColor' d='M5.94 17.44h11.82v3.41H5.94z' />
      <path
        d='M17.76 12.67v6.23c0 1.17 0 1.75-.34 2.05s-.97.22-2.24.06c-.95-.11-1.96-.16-3.19-.16-1.22 0-2.24.05-3.18.16-1.27.16-1.9.24-2.25-.06-.33-.3-.33-.88-.33-2.05v-6.23'
        stroke='currentColor'
      />
      <path d='M17.69 17.74a14 14 0 0 0-5.7-.98 14 14 0 0 0-5.7.98' stroke='currentColor' />
      <path d='M7.12 6.24a4.64 4.64 0 0 1 8.58-1.1 5.3 5.3 0 0 1 .56 3.64' stroke='currentColor' />
      <path
        d='M5.46 14.51a3.3 3.3 0 0 1-1.98-1.08A4.03 4.03 0 0 1 6.3 6.62a3.9 3.9 0 0 1 3.15 1.6'
        stroke='currentColor'
      />
      <path
        d='M16.4 7.05a3.2 3.2 0 0 1 3.1.1 4.05 4.05 0 0 1 1.43 5.48c-.64 1.14-1.51 1.83-2.42 1.94'
        stroke='currentColor'
      />
    </svg>
  )
}
