import type { Icon } from './types'

export const IconDevicePcPause: Icon = ({
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
      data-slot='icon-ui-device-pc-pause'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.26 9.07c0-2.83 0-4.25-.88-5.13s-2.29-.87-5.12-.87H7.74c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v1.74c0 2.83 0 4.25.88 5.13s2.29.87 5.12.87h8.52c2.83 0 4.24 0 5.12-.87.88-.88.88-2.3.88-5.13z'
        fill='currentColor'
      />
      <rect x='1.74' y='3.07' width='20.52' height='13.75' rx='3' stroke='currentColor' />
      <path d='M7.64 20.93h8.7' stroke='currentColor' />
      <path d='M12 20.93v-3.99' stroke='currentColor' />
      <path d='M9.69 7v5.88' stroke='currentColor' />
      <path d='M14.31 7v5.88' stroke='currentColor' />
    </svg>
  )
}
