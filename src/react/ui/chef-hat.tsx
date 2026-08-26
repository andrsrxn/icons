import type { Icon } from './types'

export const IconChefHat: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-chef-hat'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' fill='currentColor' d='M6.02 17.25H17.7v3.31H6.02z' />
      <path
        d='M17.7 12.63v5.98c0 1.16 0 1.75-.34 2.04-.33.3-.97.23-2.23.07-.93-.11-1.93-.16-3.13-.16s-2.2.05-3.13.16c-1.26.16-1.9.23-2.23-.07s-.34-.88-.34-2.04v-5.98'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.63 17.55c-1.8-.7-3.29-.95-5.63-.95s-3.84.25-5.63.95M7.19 6.4a4.62 4.62 0 0 1 8.48-1.08c.75 1.31.73 2.64.55 3.53M5.55 14.42a3.3 3.3 0 0 1-1.96-1.06 3.87 3.87 0 0 1 2.78-6.6c1.27 0 2.4.6 3.1 1.55'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.35 7.18c.97-.5 2.15-.43 3.06.1a3.9 3.9 0 0 1 1.43 5.31c-.64 1.1-1.5 1.78-2.4 1.89'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
