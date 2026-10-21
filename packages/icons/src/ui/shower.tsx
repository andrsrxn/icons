import type { Icon } from './types'

export const IconShower: Icon = ({
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
      data-slot='icon-ui-shower'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M10.9 3.68a5 5 0 0 1 1.22-.64 2 2 0 0 1 1.8.44c.23.2.41.52.79 1.14l.11.18-4.76 2.88-.11-.18a5 5 0 0 1-.64-1.23 2 2 0 0 1 .44-1.8 5 5 0 0 1 1.14-.79'
        fill='currentColor'
      />
      <path d='M3.87 22.01V6.47c0-4.06 4.02-5.9 6.98-3.14' stroke='currentColor' />
      <path d='M16.73 4.4 8.9 8.83' stroke='currentColor' />
      <path d='m11.94 13.36-.3-1.84' stroke='currentColor' />
      <path d='M13.37 19.82 13.25 18' stroke='currentColor' />
      <path d='m16.73 14.68-.92-1.87' stroke='currentColor' />
      <path d='m18.83 20.6-.55-1.84' stroke='currentColor' />
      <path d='M18.57 9.57 17 8.1' stroke='currentColor' />
      <path d='m21.4 15.35-.88-1.6' stroke='currentColor' />
      <path d='m15.28 5.16-.32-.58a2.98 2.98 0 0 0-5.2 2.92l.33.58' stroke='currentColor' />
    </svg>
  )
}
