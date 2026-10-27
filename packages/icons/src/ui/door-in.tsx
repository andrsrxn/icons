import type { Icon } from './types'

export const IconDoorIn: Icon = ({
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
      data-slot='icon-ui-door-in'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' fill='currentColor' d='M5.11 2.68h13.77v18.7H5.11z' />
      <path
        d='M5.11 21.12V6.68c0-1.88 0-2.83.59-3.41.58-.59 1.53-.59 3.41-.59h5.93c1.74 0 2.6 0 3.17.5l.17.18c.5.56.5 1.43.5 3.17'
        stroke='currentColor'
      />
      <path d='M18.89 16.96v4.16' stroke='currentColor' />
      <path d='M21.18 21.39H2.82' stroke='currentColor' />
      <path
        d='m16.05 14.74-.62-.62c-1-1-1.5-1.5-1.5-2.12s.5-1.12 1.5-2.12l.62-.62'
        stroke='currentColor'
      />
      <path d='M20.06 12h-5.72' stroke='currentColor' />
    </svg>
  )
}
