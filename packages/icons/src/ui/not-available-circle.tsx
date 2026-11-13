import type { Icon } from './types'

export const IconNotAvailableCircle: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-not-available-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path
        d='M5.41 15.04v-4.37c0-1.01 0-1.52.24-1.57s.45.4.9 1.3l1.57 3.2c.45.9.68 1.36.91 1.3.23-.05.23-.56.23-1.57v-4.5'
        stroke='currentColor'
      />
      <path
        d='m14.54 15.09 1.07-3.65h0c.53-1.8.8-2.69 1.28-2.68.5 0 .74.9 1.22 2.72l.96 3.61'
        stroke='currentColor'
      />
      <path d='M15.35 12.68h3' stroke='currentColor' />
      <path d='m13.56 8.76-1.94 6.33' stroke='currentColor' />
    </svg>
  )
}
