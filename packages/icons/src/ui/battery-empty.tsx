import type { Icon } from './types'

export const IconBatteryEmpty: Icon = ({
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
      data-slot='icon-ui-battery-empty'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M7.72 18h5.26c2.34 0 3.51 0 4.36-.54a3.5 3.5 0 0 0 1.1-1.1c.54-.85.54-2.02.54-4.36v0c0-2.34 0-3.5-.53-4.36a3.5 3.5 0 0 0-1.1-1.1C16.48 6 15.31 6 12.97 6H7.72c-2.34 0-3.5 0-4.36.54a3.5 3.5 0 0 0-1.1 1.1c-.54.85-.54 2.02-.54 4.36v0c0 2.34 0 3.5.54 4.36q.42.68 1.1 1.1c.85.54 2.02.54 4.36.54'
        stroke='currentColor'
      />
      <path
        d='m18.98 8.32.88.34c1.11.44 1.67.65 2 1.1l.13.18c.3.48.3 1.07.29 2.27 0 1.21 0 1.82-.3 2.3q-.05.1-.12.19c-.35.44-.92.65-2.05 1.08l-.83.31'
        stroke='currentColor'
      />
    </svg>
  )
}
