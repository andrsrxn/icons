import type { Icon } from './types'

export const IconSolarPanel: Icon = ({
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
      data-slot='icon-ui-solar-panel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M2.66 11.29h19.02l.29 4.5H2.03z' fill='currentColor' />
      <path opacity='.2' d='M4.08 3.7h16.14l.24 3.82H3.54z' fill='currentColor' />
      <path
        d='M3.5 6.33c.35-1.49.52-2.23 1.07-2.67.54-.43 1.3-.43 2.84-.43h9.33c1.55 0 2.33 0 2.88.44.55.45.7 1.2 1.03 2.72l1.08 5.04c.47 2.23.71 3.35.11 4.09s-1.74.74-4.02.74H6.26c-2.32 0-3.47 0-4.07-.75s-.35-1.88.17-4.14z'
        stroke='currentColor'
      />
      <path d='M20.79 7.6H3.55' stroke='currentColor' />
      <path d='M21.66 11.88H2.34' stroke='currentColor' />
      <path d='M12 16.26v4.51' stroke='currentColor' />
      <path d='M15.46 20.77H8.54' stroke='currentColor' />
      <path d='M16 15.78 14.93 4.12' stroke='currentColor' />
      <path d='M8.1 15.78 9.16 4.12' stroke='currentColor' />
    </svg>
  )
}
