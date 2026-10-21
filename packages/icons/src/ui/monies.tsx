import type { Icon } from './types'

export const IconMonies: Icon = ({
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
      data-slot='icon-ui-monies'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m20.03 11.44 2.24-1.04V7.28L19.78 6l-1.6-2.62h-8.16L8.53 6.45l-2.6.78v2.3l5.9.04c0-1.12 1.21-2.65 2.28-2.65s2.24 1.53 2.24 2.65l1.49 1.37.35 3.6z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <rect
        width='11.16'
        height='16.33'
        rx='3'
        transform='matrix(0 -1 -1 0 18.06 20.63)'
        stroke='currentColor'
      />
      <path
        d='M5.94 9.37c0-2.83 0-4.24.87-5.11l.01-.01c.88-.88 2.29-.88 5.11-.88h4.76c2.42 0 3.64 0 4.46.66a3 3 0 0 1 .46.47c.66.82.66 2.03.66 4.45v1.44c0 1.07 0 1.6-.13 2.03a3 3 0 0 1-1.98 1.98c-.43.14-.97.14-2.04.14'
        stroke='currentColor'
      />
      <path d='M5.5 9.57c0 2.2-1.63 3.98-3.63 3.98' stroke='currentColor' />
      <path d='M9.7 3.48c0 2.2-1.63 3.98-3.66 3.98' stroke='currentColor' />
      <path d='M14.3 9.57c0 2.2 1.63 3.98 3.66 3.98' stroke='currentColor' />
      <path d='M18.5 3.48c0 2.2 1.62 3.98 3.6 3.98' stroke='currentColor' />
      <path d='M5.5 20.63c0-2.2-1.63-3.98-3.63-3.98' stroke='currentColor' />
      <path d='M14.3 20.63c0-2.2 1.63-3.98 3.66-3.98' stroke='currentColor' />
      <path d='M18.5 14.54c0-2.2 1.7-3.98 3.77-3.98' stroke='currentColor' />
      <circle cx='9.89' cy='15.05' r='2.17' stroke='currentColor' />
      <path d='M11.94 8.96a2.17 2.17 0 1 1 4.33 0c0 .56-.2.73-.2.73' stroke='currentColor' />
    </svg>
  )
}
