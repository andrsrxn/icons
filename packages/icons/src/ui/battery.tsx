import type { Icon } from './types'

export const IconBattery: Icon = ({
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
      data-slot='icon-ui-battery'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.71'
        y='5.73'
        width='17.27'
        height='12.54'
        rx='3'
        fill='currentColor'
      />
      <rect x='1.71' y='6' width='17.27' height='12' rx='3' stroke='currentColor' />
      <path
        d='m19 8.28.85.34c1.14.45 1.7.68 2.05 1.14l.09.13c.3.48.3 1.1.3 2.32 0 1.25 0 1.87-.31 2.36l-.1.13c-.34.46-.92.68-2.08 1.13l-.8.3'
        stroke='currentColor'
      />
    </svg>
  )
}
