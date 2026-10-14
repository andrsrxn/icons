import type { Icon } from './types'

export const IconDevicePcActivity: Icon = ({
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
      data-slot='icon-ui-device-pc-activity'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.74'
        y='3.33'
        width='20.52'
        height='13.75'
        rx='3'
        fill='currentColor'
      />
      <rect x='1.74' y='3.33' width='20.52' height='13.75' rx='3' stroke='currentColor' />
      <path d='M7.64 21.2h8.7' stroke='currentColor' />
      <path d='M12 21.2v-3.99' stroke='currentColor' />
      <path
        d='M6.73 10.27h.92c.3 0 .44 0 .56-.07s.19-.2.32-.47l.91-1.76c.49-.94.73-1.41 1.07-1.38s.49.54.78 1.56l1.24 4.24c.28.97.42 1.46.75 1.5.33.03.58-.41 1.08-1.3l1.02-1.8c.14-.26.2-.38.32-.45s.26-.07.55-.07h1'
        stroke='currentColor'
      />
    </svg>
  )
}
