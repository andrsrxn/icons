import type { Icon } from './types'

export const IconBounceEnd: Icon = ({
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
      data-slot='icon-ui-bounce-end'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='19.13' cy='6.89' r='3.19' fill='currentColor' />
      <path
        d='M1.68 14.6c1.24.36 2.15.78 3.44 2.3 1.29 1.53 1.75 3.4 1.75 3.4s.43-4.29 1.68-6.37a10 10 0 0 1 4.7-4.32'
        stroke='currentColor'
      />
      <circle cx='19.13' cy='6.89' r='3.19' stroke='currentColor' />
    </svg>
  )
}
