import type { Icon } from './types'

export const IconOvenMitts: Icon = ({
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
      data-slot='icon-ui-oven-mitts'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='11.39'
        height='4.31'
        rx='1'
        transform='matrix(-.71888 -.69513 .67113 -.74134 9.71 22.8)'
        fill='currentColor'
      />
      <path
        d='M5.05 12.06c.77-2.66-.5-6.8 2.42-8.95 1.55-1.14 3.68.2 4.11 1.54'
        stroke='currentColor'
      />
      <rect
        width='11.62'
        height='4'
        rx='1'
        transform='matrix(-.71888 -.69513 .67113 -.74134 10.01 22.7)'
        stroke='currentColor'
      />
      <path
        d='m10.5 5.96 2.48-2.62a5.1 5.1 0 0 1 7.32-.16 5.53 5.53 0 0 1 .11 7.8l-8.16 8.31'
        stroke='currentColor'
      />
    </svg>
  )
}
