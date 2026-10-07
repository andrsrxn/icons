import type { Icon } from './types'

export const IconLightbulbOn: Icon = ({
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
      data-slot='icon-ui-lightbulb-on'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='9.37' y='17.2' width='4.98' height='5.16' rx='1' fill='currentColor' />
      <path d='M12 2.73v-1.1' stroke='currentColor' />
      <path d='M21.2 10.4h1' stroke='currentColor' />
      <path d='M1.9 10.4h1' stroke='currentColor' />
      <path d='m5.34 4.69-.67-.67' stroke='currentColor' />
      <path d='m18.62 4.69.65-.65' stroke='currentColor' />
      <path
        d='M14.86 17.83c0-.64.37-1.2.87-1.59 1.4-1.08 2.11-2.84 2.11-4.82a5.98 5.98 0 1 0-11.96 0c0 1.98.7 3.74 2.11 4.83.5.4.88.95.88 1.59'
        stroke='currentColor'
      />
      <path
        d='M8.87 17.75v1.62a5 5 0 0 0 .15 1.75c.2.5.6.89 1.09 1.09.37.15.83.15 1.75.15.93 0 1.4 0 1.76-.15a2 2 0 0 0 1.09-1.09c.15-.37.15-.83.15-1.75v-1.62'
        stroke='currentColor'
      />
      <path d='M14.86 17.75H9.09' stroke='currentColor' />
      <path d='M8.86 11.64c0-.44.13-1.04.4-1.55.3-.6.71-.89 1.14-1.16' stroke='currentColor' />
    </svg>
  )
}
