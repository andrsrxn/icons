import type { Icon } from './types'

export const IconHandbag: Icon = ({
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
      data-slot='icon-ui-handbag'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2 8.47h20v4.5c0 3.77 0 5.65-1.18 6.82-1.17 1.18-3.05 1.18-6.82 1.18h-4c-3.77 0-5.65 0-6.83-1.18C2 18.62 2 16.74 2 12.97z'
        fill='currentColor'
      />
      <path d='M17 8.47c0-3.03-.74-5.44-5-5.44S7 5.65 7 8.47' stroke='currentColor' />
      <path
        d='M1.69 12.47c0-1.88 0-2.83.58-3.41.59-.59 1.53-.59 3.42-.59H18.3c1.89 0 2.83 0 3.42.59.58.58.58 1.53.58 3.41v.5c0 3.77 0 5.65-1.17 6.82-1.17 1.18-3.06 1.18-6.83 1.18H9.7c-3.77 0-5.66 0-6.83-1.18-1.17-1.17-1.17-3.05-1.17-6.82z'
        stroke='currentColor'
      />
    </svg>
  )
}
