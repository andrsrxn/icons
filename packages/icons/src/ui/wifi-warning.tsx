import type { Icon } from './types'

export const IconWifiWarning: Icon = ({
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
      data-slot='icon-ui-wifi-warning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M12.96 18.36a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M1.66 8.33c1.54-1.23 4-2.66 7.05-3.3' stroke='currentColor' />
      <path d='M7.28 15.12a7 7 0 0 1 1.75-1.1' stroke='currentColor' />
      <path d='M16.72 15.12a7 7 0 0 0-1.73-1.1' stroke='currentColor' />
      <path d='M4.1 11.95a13 13 0 0 1 4.71-2.36' stroke='currentColor' />
      <path d='M19.9 11.95a13 13 0 0 0-4.7-2.35' stroke='currentColor' />
      <path d='M12 14.12V3.17' stroke='currentColor' />
      <path d='M22.34 8.33a16 16 0 0 0-6.84-3.3' stroke='currentColor' />
    </svg>
  )
}
