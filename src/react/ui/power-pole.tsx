import type { Icon } from './types'

export const IconPowerPole: Icon = ({
  size = 24,
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
      data-slot='power-pole'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M9.83 14.6V7.25M6.8 20.68l3.03-6.08m-4.58-3.47 4.58-3.88m8.92 3.88-4.58-3.88m3.03 13.43-3.03-6.08m0 0V7.25m-5.9 10.83h7.46M5.25 11.13h4.58m8.92 0h-4.58M9.83 7.25 12 3.32m2.17 3.93L12 3.32M9.83 14.6h4.34M7 13v-1.87M17 13v-1.87m-7.17 0h4.34M9.83 7.25h4.34'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
