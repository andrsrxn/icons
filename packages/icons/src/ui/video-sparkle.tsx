import type { Icon } from './types'

export const IconVideoSparkle: Icon = ({
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
      data-slot='icon-ui-video-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.36 11.46c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-2.5c-2.84 0-4.25 0-5.13.88s-.88 2.29-.88 5.12v1.08c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h2.5c2.84 0 4.25 0 5.13-.88s.88-2.29.88-5.12zm-8.4-.39a1.56 1.56 0 1 1 2.31 2.1l-.17.17a1.55 1.55 0 0 1-2.3-2.07z'
        fill='currentColor'
      />
      <rect x='1.85' y='5.46' width='14.51' height='13.08' rx='3' stroke='currentColor' />
      <path
        d='m16.36 9.14.63-.32c2.08-1.05 3.12-1.58 3.94-1.28a2 2 0 0 1 .67.41c.64.6.64 1.76.64 4.1 0 2.3 0 3.45-.64 4.04a2 2 0 0 1-.65.41c-.81.31-1.85-.2-3.92-1.2l-.67-.34'
        stroke='currentColor'
      />
      <path d='M5.67 12c1.66 0 3.43-1.79 3.43-3.43' stroke='currentColor' />
      <path d='M12.54 12c-1.65 0-3.44-1.79-3.44-3.43' stroke='currentColor' />
      <path d='M5.67 12c1.65 0 3.43 1.82 3.43 3.43' stroke='currentColor' />
      <path d='M12.54 12c-1.63 0-3.44 1.8-3.44 3.43' stroke='currentColor' />
    </svg>
  )
}
