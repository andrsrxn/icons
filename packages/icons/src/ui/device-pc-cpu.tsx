import type { Icon } from './types'

export const IconDevicePcCpu: Icon = ({
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
      data-slot='icon-ui-device-pc-cpu'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect x='12.74' y='4.26' width='9.57' height='15.48' rx='2' stroke='currentColor' />
      <path
        d='M17.53 15.03a.56.56 0 1 1 0 1.12.56.56 0 0 1 0-1.12'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M15.94 7.86h3.39' stroke='currentColor' />
      <path d='M15.94 10.8h3.39' stroke='currentColor' />
      <path
        opacity='.2'
        d='M1.69 9.49c0-1.89 0-2.83.58-3.41.59-.59 1.53-.59 3.42-.59h3.05c1.89 0 2.83 0 3.42.59.58.58.58 1.52.58 3.41v2.95c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58H5.7c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42z'
        fill='currentColor'
      />
      <path
        d='M12.74 5.49H5.7c-1.89 0-2.83 0-3.42.59-.58.58-.58 1.52-.58 3.41v2.95c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h6.8'
        stroke='currentColor'
      />
      <path d='M6.35 19.46h4.31' stroke='currentColor' />
      <path d='M8.5 19.46v-2.98' stroke='currentColor' />
    </svg>
  )
}
