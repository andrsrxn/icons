import type { Icon } from './types'

export const IconDevicePcWarning: Icon = ({
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
      data-slot='icon-ui-device-pc-warning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.74 9.94c0-2.69 0-4.03.62-5.01A4 4 0 0 1 3.6 3.69c.98-.62 2.32-.62 5.01-.62h6.78c2.69 0 4.03 0 5.01.62a4 4 0 0 1 1.24 1.24c.62.98.62 2.32.62 5.01s0 4.04-.62 5.02a4 4 0 0 1-1.24 1.23c-.98.63-2.32.63-5.01.63H8.6c-2.69 0-4.03 0-5.01-.63a4 4 0 0 1-1.24-1.24c-.62-.97-.62-2.32-.62-5.01'
        fill='currentColor'
      />
      <path
        d='M8.61 16.82h6.78c2.69 0 4.03 0 5.01-.63a4 4 0 0 0 1.24-1.24c.62-.97.62-2.32.62-5.01v0c0-2.69 0-4.03-.62-5.01a4 4 0 0 0-1.24-1.24c-.98-.62-2.32-.62-5.01-.62H8.6c-2.69 0-4.03 0-5.01.62a4 4 0 0 0-1.24 1.24c-.62.98-.62 2.32-.62 5.01v0c0 2.69 0 4.04.62 5.02a4 4 0 0 0 1.24 1.23c.98.63 2.32.63 5.01.63'
        stroke='currentColor'
      />
      <path d='M7.64 20.93h8.7' stroke='currentColor' />
      <path d='M12 20.93v-3.99' stroke='currentColor' />
      <path d='M12 10.34V6.15' stroke='currentColor' />
      <path
        d='M12.44 13.46a.44.44 0 1 1-.88 0 .44.44 0 0 1 .88 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
