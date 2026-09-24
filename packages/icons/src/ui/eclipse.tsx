import type { Icon } from './types'

export const IconEclipse: Icon = ({
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
      data-slot='icon-ui-eclipse'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.13 15a6.57 6.57 0 0 1-6.35-6.45c-.83-6.74 1.33-7.18 6.35-5.97s5.34 2.65 6.48 6.41c1.77 4.25 1.48 6.15-6.48 6.01'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.3' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M22.17 13.76s-6.64 3.83-11.22-.75C5.9 7.98 9.89 2.02 9.89 2.02'
        stroke='currentColor'
      />
    </svg>
  )
}
