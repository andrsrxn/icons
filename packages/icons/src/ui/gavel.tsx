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
        x='10.38'
        y='10.69'
        width='4.24'
        height='12.92'
        rx='1.5'
        transform='rotate(45 10.38 10.7)'
        fill='currentColor'
      />
      <path
        d='m10.38 10.7 3 3-7.64 7.63c-.4.4-.61.61-.83.72a1.5 1.5 0 0 1-1.34 0c-.22-.1-.42-.31-.83-.72v0c-.4-.41-.61-.61-.72-.83a1.5 1.5 0 0 1 0-1.34c.1-.22.31-.42.72-.83z'
        stroke='currentColor'
      />
      <path stroke='currentColor' d='m7.76 7.84 5.4-5.4 8.32 8.33-5.4 5.4z' />
      <path d='m15.13 17.12 7.31-7.3' stroke='currentColor' />
      <path d='m6.8 8.8 7.32-7.31' stroke='currentColor' />
    </svg>
  )
}
