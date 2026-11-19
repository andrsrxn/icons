import type { Icon } from './types'

export const IconEarListen: Icon = ({
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
      data-slot='icon-ui-ear-listen'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m15.45 1.96-4.39 1.23a2 2 0 0 0-.86.5l-.64.63a2 2 0 0 0-.6 1.42v9.2a2 2 0 0 0 .51 1.33l.74.83a2 2 0 0 1 .44.82l.55 2.1a2 2 0 0 0 1.18 1.34l1.47.59a2 2 0 0 0 1.6-.04l1.67-.79a2 2 0 0 0 1.1-1.41l.84-4.12a2 2 0 0 1 .24-.62l2.64-4.48a2 2 0 0 0 .23-1.43l-.82-3.86a2 2 0 0 0-1.05-1.37L16.9 2.1a2 2 0 0 0-1.45-.14'
        fill='currentColor'
      />
      <path
        d='m9.14 5.1.58-.74a7.7 7.7 0 0 1 5.63-2.53c3.52 0 6.15 1.7 6.75 5.29.85 5.05-2.8 5.77-3.24 8.68-.41 2.79-.13 3.46-.76 4.66-1 1.85-3.28 2.07-5.03 1.43-1.84-.67-1.7-2.27-2.25-3.95a5 5 0 0 0-1.1-1.78l-.56-.5'
        stroke='currentColor'
      />
      <path
        d='M10.38 11.75c.96.52 2.04.1 2.44-1.02s-.45-1.98-1.5-2.28c.1-1.79 2.3-3.33 4.07-3.33 1.92 0 2.95 1.21 3.07 2.79.22 2.94-1.42 3.74-2.76 5.86 0 0-.73 1.06-.43 2.56'
        stroke='currentColor'
      />
      <path d='M6.68 7.78S5.43 8.91 5.2 11.03c-.2 1.92.78 3.37.78 3.37' stroke='currentColor' />
      <path d='M4.17 5.68S2.16 7.4 1.79 10.85a8 8 0 0 0 1.3 5.1' stroke='currentColor' />
    </svg>
  )
}
