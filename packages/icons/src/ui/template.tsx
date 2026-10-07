import type { Icon } from './types'

export const IconTemplate: Icon = ({
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
      data-slot='icon-ui-template'
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
        d='M1.73 6.76c0-1.89 0-2.83.59-3.42.58-.58 1.52-.58 3.41-.58h.11c1.89 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v10.48c0 1.89 0 2.83-.59 3.42-.58.58-1.52.58-3.41.58h-.11c-1.89 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42z'
        fill='currentColor'
      />
      <rect
        width='8.11'
        height='18.48'
        rx='2'
        transform='matrix(-1 0 0 1 9.84 2.76)'
        stroke='currentColor'
      />
      <path d='M13.5 19.54h8.77' stroke='currentColor' />
      <path d='M13.5 14.51h8.77' stroke='currentColor' />
      <path d='M13.5 9.49h8.77' stroke='currentColor' />
      <path d='M13.5 4.46h8.77' stroke='currentColor' />
    </svg>
  )
}
