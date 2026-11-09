import type { Icon } from './types'

export const IconDevicePcCloud: Icon = ({
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
      data-slot='icon-ui-device-pc-cloud'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.26 9.94c0-2.69 0-4.03-.62-5.01a4 4 0 0 0-1.24-1.24c-.98-.62-2.32-.62-5.01-.62H8.6c-2.69 0-4.03 0-5.01.62a4 4 0 0 0-1.24 1.24c-.62.98-.62 2.32-.62 5.01s0 4.04.62 5.02a4 4 0 0 0 1.24 1.23c.98.63 2.32.63 5.01.63h6.78c2.69 0 4.03 0 5.01-.63a4 4 0 0 0 1.24-1.24c.62-.97.62-2.32.62-5.01m-8.1-2.3a2.3 2.3 0 0 0-1.72-1.3l-.38-.06c-.85-.13-1.72.1-2.39.64l-1.13.92-.01.01a4 4 0 0 1-.62.41v.01l-.61.32a2.9 2.9 0 0 0-1.54 2.58v.1a2.74 2.74 0 0 0 2.74 2.75h6.44c.94 0 1.83-.45 2.38-1.22l.27-.37a2.2 2.2 0 0 0-1.6-3.49 2.2 2.2 0 0 1-1.8-1.25z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M8.61 16.82h6.78c2.69 0 4.03 0 5.01-.63a4 4 0 0 0 1.24-1.24c.62-.97.62-2.32.62-5.01v0c0-2.69 0-4.03-.62-5.01a4 4 0 0 0-1.24-1.24c-.98-.62-2.32-.62-5.01-.62H8.6c-2.69 0-4.03 0-5.01.62a4 4 0 0 0-1.24 1.24c-.62.98-.62 2.32-.62 5.01v0c0 2.69 0 4.04.62 5.02a4 4 0 0 0 1.24 1.23c.98.63 2.32.63 5.01.63'
        stroke='currentColor'
      />
      <path d='M7.64 20.93h8.7' stroke='currentColor' />
      <path d='M12 20.93v-3.99' stroke='currentColor' />
      <path
        d='M8.14 13.83c-.7 0-1.39-.32-1.86-.83a2.8 2.8 0 0 1-.74-1.92 2.7 2.7 0 0 1 2.6-2.75c.85 0 1.6.43 2.08 1.1'
        stroke='currentColor'
      />
      <path d='M16 13.83H8.04' stroke='currentColor' />
      <path d='M8.45 8.33a3.14 3.14 0 0 1 5.76-.73c.51.9.5 1.8.38 2.4' stroke='currentColor' />
      <path
        d='M14.67 8.87a2.2 2.2 0 0 1 2.09.07c1.26.72 1.7 2.34.96 3.6-.43.75-1.02 1.2-1.62 1.28'
        stroke='currentColor'
      />
    </svg>
  )
}
