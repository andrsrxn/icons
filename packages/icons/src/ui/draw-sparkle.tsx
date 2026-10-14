import type { Icon } from './types'

export const IconDrawSparkle: Icon = ({
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
      data-slot='icon-ui-draw-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='4.46'
        height='4.99'
        rx='1'
        transform='scale(1 -1)rotate(45 18.53 17.45)'
        fill='currentColor'
      />
      <path d='m17.9 7.4-3.13-3.13' stroke='currentColor' />
      <path
        d='M8.62 15.95a4 4 0 0 0 .92-.34c.2-.12.37-.29.7-.62l9.38-9.24c.49-.48.73-.72.85-.98q.24-.59 0-1.19c-.11-.27-.35-.5-.84-.99a3 3 0 0 0-.98-.83 1.5 1.5 0 0 0-1.18 0c-.26.11-.5.35-.98.83l-9.34 9.3a4 4 0 0 0-.65.74c-.11.2-.18.43-.32.88-.46 1.5-.69 2.25-.31 2.67l.07.07c.42.38 1.17.15 2.68-.3'
        stroke='currentColor'
      />
      <path
        d='M3.46 18.36c-1.22 1.1-.43 3.55 1.46 3.88 4.7.83 5.55-3.03 9.36-3.38 1.78-.17 3.42.6 3.42 2.6'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m5.92 3.9-.96-1.8-.97 1.8-1.85 1.03L4 5.88l.97 2.1.96-2.1 2-1.05z'
        fill='currentColor'
      />
      <path d='M1.5 5.04c1.7 0 3.52-1.83 3.52-3.52' stroke='currentColor' />
      <path d='M8.54 5.04c-1.7 0-3.52-1.83-3.52-3.52' stroke='currentColor' />
      <path d='M1.5 5.04c1.68 0 3.52 1.87 3.52 3.53' stroke='currentColor' />
      <path d='M8.54 5.04c-1.67 0-3.52 1.84-3.52 3.53' stroke='currentColor' />
    </svg>
  )
}
