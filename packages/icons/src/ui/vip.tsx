import type { Icon } from './types'

export const IconVip: Icon = ({
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
      data-slot='icon-ui-vip'
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
      <path d='M12.23 9.05v5.9' stroke='currentColor' />
      <path d='M15.76 9.05v5.9' stroke='currentColor' />
      <path
        d='M15.79 9.05h2.1c.88 0 1.6.76 1.6 1.69s-.72 1.69-1.6 1.69h-2.1'
        stroke='currentColor'
      />
      <path d='m4.77 9.08 2.22 5.87' stroke='currentColor' />
      <path d='m9.22 9.08-2.23 5.87' stroke='currentColor' />
    </svg>
  )
}
