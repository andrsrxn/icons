import type { Icon } from './types'

export const IconBatteryPlus: Icon = ({
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
      data-slot='icon-ui-battery-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.74 12c0-2.34 0-3.5.54-4.36a3.5 3.5 0 0 1 1.1-1.1C4.23 6 5.4 6 7.74 6h5.23c2.33 0 3.5 0 4.36.54q.67.42 1.1 1.1c.54.85.54 2.02.54 4.36s0 3.5-.54 4.36a3.5 3.5 0 0 1-1.1 1.1c-.86.54-2.02.54-4.36.54H7.74c-2.34 0-3.5 0-4.36-.54a3.5 3.5 0 0 1-1.1-1.1c-.54-.85-.54-2.02-.54-4.36'
        fill='currentColor'
      />
      <path
        d='M7.74 18h5.23c2.33 0 3.5 0 4.36-.54a3.5 3.5 0 0 0 1.1-1.1c.54-.85.54-2.02.54-4.36v0c0-2.34 0-3.5-.54-4.36a3.5 3.5 0 0 0-1.1-1.1C16.47 6 15.3 6 12.97 6H7.74c-2.34 0-3.5 0-4.36.54a3.5 3.5 0 0 0-1.1 1.1c-.54.85-.54 2.02-.54 4.36v0c0 2.34 0 3.5.54 4.36q.43.68 1.1 1.1c.85.54 2.02.54 4.36.54'
        stroke='currentColor'
      />
      <path
        d='m18.97 8.44.94.36c1.02.39 1.53.58 1.86.96q.15.17.25.36c.24.44.24 1 .24 2.08 0 1.11 0 1.67-.25 2.12a2 2 0 0 1-.25.35c-.34.39-.86.58-1.9.96l-.9.32'
        stroke='currentColor'
      />
      <path d='M7.57 12h5.61' stroke='currentColor' />
      <path d='M10.37 14.84V9.16' stroke='currentColor' />
    </svg>
  )
}
