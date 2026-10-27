import type { Icon } from './types'

export const IconFavicon: Icon = ({
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
      data-slot='icon-ui-favicon'
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
      <path d='M5.22 14.9V9.13' stroke='currentColor' />
      <path
        d='M14.45 12.06c0-1.6 1.12-2.91 2.5-2.91 1.4 0 2.52 1.3 2.52 2.91 0 1.6-1.13 2.9-2.51 2.9-.7 0-1.34-.33-1.8-.87a3.2 3.2 0 0 1-.71-2.03'
        stroke='currentColor'
      />
      <path
        d='M12.21 9.35q-.59-.31-1.3-.32A2.9 2.9 0 0 0 8.08 12a2.9 2.9 0 0 0 2.85 2.97q.7 0 1.3-.32'
        stroke='currentColor'
      />
    </svg>
  )
}
