import type { Icon } from './types'

export const IconHelmetOff: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-helmet-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.03 13.52c0 2.8 2.4 5.37 3.96 7.31h13.97c.86-.95 1.22-3.29 1.7-4.5 0 0-2.1-.02-3.43-.23-2.39-.39-5.87-2-5.87-2L10 10.34s.58-1.97 2.21-1.97h8.39c-1.84-3.29-4.6-5.5-8.63-5.5-5.94 0-9.95 4.7-9.95 10.65'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M5.23 5.3a9.8 9.8 0 0 0-3.21 7.96 9.4 9.4 0 0 0 3.95 7.24h0c.36.25.54.37.97.5.44.14.78.14 1.45.14h10.29a1.8 1.8 0 0 0 1.57-.82'
        stroke='currentColor'
      />
      <path
        d='M7.72 3.72c1.27-.55 2.72-.86 4.27-.86 5.03 0 9.43 4.1 9.88 10.4.09 1.28-.06 2.77-.44 4.18'
        stroke='currentColor'
      />
      <path d='M10.17 10.18c.03.39.22.76.48 1.36.6 1.4 1.89 2.84 4.58 3.78' stroke='currentColor' />
      <path d='M19.35 16.18q.87.1 1.87.14' stroke='currentColor' />
      <path d='M12.69 8.62h7.81' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
