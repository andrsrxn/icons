import type { Icon } from './types'

export const IconListPin: Icon = ({
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
      data-slot='icon-ui-list-pin'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.75 17.33c-1.47 0-2.21 0-2.5-.48-.3-.49.05-1.14.73-2.45l.72-1.39a.8.8 0 0 0-.23-1.04.83.83 0 0 1 .5-1.48h3c.8 0 1.15 1 .53 1.5-.3.24-.4.66-.23 1l.7 1.48c.61 1.28.92 1.92.62 2.4-.29.46-1 .46-2.42.46z'
        fill='currentColor'
      />
      <path d='M21.19 6H2.8' stroke='currentColor' />
      <path d='M11.57 12H2.81' stroke='currentColor' />
      <path d='M11.57 18H2.81' stroke='currentColor' />
      <path
        d='M17.75 17.33c-1.47 0-2.21 0-2.5-.48-.3-.49.05-1.14.73-2.45l.72-1.39a.8.8 0 0 0-.23-1.04.83.83 0 0 1 .5-1.48h3c.8 0 1.15 1 .53 1.5-.3.24-.4.66-.23 1l.7 1.48c.61 1.28.92 1.92.62 2.4-.29.46-1 .46-2.42.46z'
        stroke='currentColor'
      />
      <path d='m18.44 20.02-.03-2.7' stroke='currentColor' />
    </svg>
  )
}
