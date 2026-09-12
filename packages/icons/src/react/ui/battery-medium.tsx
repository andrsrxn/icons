import type { Icon } from './types'

export const IconBatteryMedium: Icon = ({
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
      data-slot='icon-ui-battery-medium'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.72 12c0-2.83 0-4.24.88-5.12S4.9 6 7.72 6H11v12H7.72c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12'
        fill='currentColor'
      />
      <rect x='1.72' y='6' width='17.26' height='12' rx='3' stroke='currentColor' />
      <path
        d='m18.98 8.44.95.36c1.02.39 1.53.58 1.86.96a2 2 0 0 1 .25.36c.24.45.24 1 .24 2.08 0 1.11 0 1.67-.25 2.11a2 2 0 0 1-.25.36c-.34.39-.86.58-1.9.96l-.9.32'
        stroke='currentColor'
      />
      <path d='M5.36 9.16v5.68' stroke='currentColor' />
      <path d='M8.69 9.16v5.68' stroke='currentColor' />
    </svg>
  )
}
