import type { Icon } from './types'

export const IconDevicePc: Icon = ({
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
      data-slot='device-pc'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.75 9c0-1.89 0-2.83.58-3.41C4.92 5 5.86 5 7.75 5h8.49c1.88 0 2.82 0 3.41.59.59.58.59 1.52.59 3.41v3.26c0 1.89 0 2.83-.59 3.42s-1.53.58-3.41.58h-8.5c-1.88 0-2.82 0-3.4-.58-.6-.59-.6-1.53-.6-3.42z'
        fill='currentColor'
      />
      <path
        d='M11.96 16.26h4.28c1.88 0 2.82 0 3.41-.58.59-.59.59-1.53.59-3.42V9c0-1.89 0-2.83-.59-3.41S18.12 5 16.24 5h-8.5c-1.88 0-2.82 0-3.4.59-.6.58-.6 1.52-.6 3.41v3.26c0 1.89 0 2.83.6 3.42.58.58 1.52.58 3.4.58zm0 0V20m0 0H8.09m3.87 0h3.98'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
