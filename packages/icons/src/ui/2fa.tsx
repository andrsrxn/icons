import type { Icon } from './types'

export const Icon2fa: Icon = ({
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
      data-slot='icon-ui-2fa'
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
        d='m15.26 15.2.35-1.53c.78-3.37 1.16-5.06 1.96-5.06s1.18 1.7 1.94 5.07l.35 1.52'
        stroke='currentColor'
      />
      <path d='M19.25 12.9h-3.28' stroke='currentColor' />
      <path d='M10.81 8.75v6.36' stroke='currentColor' />
      <path d='M10.81 12.06h2.37' stroke='currentColor' />
      <path d='M10.81 8.75h2.8' stroke='currentColor' />
      <path
        d='M4.36 9.71c.47-.54.92-.96 1.87-.96 1.68 0 1.95 1.9 1.1 2.84-.48.55-1.56 1.39-2.4 2.17-.43.4-.64.6-.52.91.13.32.45.32 1.08.32H7.8'
        stroke='currentColor'
      />
    </svg>
  )
}
