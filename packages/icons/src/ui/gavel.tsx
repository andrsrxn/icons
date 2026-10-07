import type { Icon } from './types'

export const IconGavel: Icon = ({
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
      data-slot='icon-ui-gavel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='10.21'
        y='10.85'
        width='4.31'
        height='13.13'
        rx='1.5'
        transform='rotate(45 10.2 10.85)'
        fill='currentColor'
      />
      <path
        d='M10.2 10.85 2.46 18.6l-.2.2a2 2 0 0 0 0 2.65l.2.2.2.2a2 2 0 0 0 2.84-.2l7.77-7.76'
        stroke='currentColor'
      />
      <path stroke='currentColor' d='m7.55 7.95 5.48-5.48 8.46 8.46L16 16.4z' />
      <path d='m15.04 17.38 7.42-7.42' stroke='currentColor' />
      <path d='M6.58 8.93 14 1.5' stroke='currentColor' />
    </svg>
  )
}
