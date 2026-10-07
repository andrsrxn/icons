import type { Icon } from './types'

export const IconDeviceCpu: Icon = ({
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
      data-slot='icon-ui-device-cpu'
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
        d='M18.3 6.22c0-1.88 0-2.83-.59-3.41-.58-.59-1.52-.59-3.41-.59H9.7c-1.89 0-2.83 0-3.41.59-.59.58-.59 1.53-.59 3.41v11.42c0 1.89 0 2.83.59 3.42.58.58 1.52.58 3.41.58h4.6c1.89 0 2.83 0 3.41-.58.59-.59.59-1.53.59-3.42z'
        fill='currentColor'
      />
      <rect x='5.7' y='1.81' width='12.6' height='20.39' rx='3' stroke='currentColor' />
      <path
        d='M12 16.33a.74.74 0 1 1 0 1.48.74.74 0 0 1 0-1.48'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M9.28 6.33h5.44' stroke='currentColor' />
      <path d='M9.28 10.06h5.44' stroke='currentColor' />
    </svg>
  )
}
