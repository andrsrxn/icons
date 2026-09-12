import type { Icon } from './types'

export const IconKnife: Icon = ({
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
      data-slot='icon-ui-knife'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.06 3.59C16.53 2.32 22 3.03 22 3.03l-10.9 13.4-6.57-5.7s4.26-5.58 8.54-7.14'
        fill='currentColor'
      />
      <path
        d='M22.03 2.88a16 16 0 0 0-10.06 1.34C8.8 5.7 6.01 8.48 4.57 10.18a.96.96 0 0 0 .14 1.37l5.93 4.84'
        stroke='currentColor'
      />
      <path d='M6.29 22.2 21.94 2.98' stroke='currentColor' />
    </svg>
  )
}
