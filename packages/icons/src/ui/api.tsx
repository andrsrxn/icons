import type { Icon } from './types'

export const IconApi: Icon = ({
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
      data-slot='icon-ui-api'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M22.4 8.65c0-1.88 0-2.83-.6-3.41-.58-.59-1.52-.59-3.4-.59H5.6c-1.89 0-2.83 0-3.41.59-.6.58-.6 1.53-.6 3.41v6.7c0 1.88 0 2.83.6 3.41.58.59 1.52.59 3.4.59h12.8c1.88 0 2.82 0 3.4-.59.6-.58.6-1.53.6-3.41z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <rect x='1.61' y='4.65' width='20.78' height='14.69' rx='3' stroke='currentColor' />
      <path
        d='m4.35 15.45.52-2.1c.78-3.14 1.17-4.71 1.95-4.71.79 0 1.17 1.57 1.94 4.7l.51 2.1'
        stroke='currentColor'
      />
      <path d='M8.62 13.22H5.1' stroke='currentColor' />
      <path d='M11.9 8.72v6.61' stroke='currentColor' />
      <path d='M18.96 8.72v6.61' stroke='currentColor' />
      <path d='M11.93 8.72h2.35c1 0 1.8.85 1.8 1.9s-.8 1.89-1.8 1.89h-2.35' stroke='currentColor' />
    </svg>
  )
}
