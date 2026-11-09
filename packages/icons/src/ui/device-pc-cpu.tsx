import type { Icon } from './types'

export const IconDevicePcCpu: Icon = ({
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
      data-slot='icon-ui-device-pc-cpu'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M17.53 19.74c2.15 0 3.22 0 3.93-.62l.24-.24c.61-.7.61-1.78.61-3.92V9.04c0-2.14 0-3.22-.61-3.92l-.24-.24c-.71-.62-1.78-.62-3.93-.62v0c-2.15 0-3.22 0-3.93.62q-.13.1-.24.24c-.62.7-.62 1.78-.62 3.92v5.92c0 2.14 0 3.22.62 3.92q.1.14.24.24c.7.62 1.78.62 3.93.62'
        stroke='currentColor'
      />
      <path
        d='M17.53 15.03a.56.56 0 1 1 0 1.12.56.56 0 0 1 0-1.12'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M15.94 7.86h3.39' stroke='currentColor' />
      <path d='M15.94 10.8h3.39' stroke='currentColor' />
      <path
        opacity='.2'
        d='M1.69 10.97c0-2.33 0-3.49.6-4.3a3 3 0 0 1 .59-.57c.8-.61 1.96-.61 4.28-.61h5.58v10.95H7.16c-2.32 0-3.48 0-4.28-.6a3 3 0 0 1-.58-.59c-.61-.8-.61-1.96-.61-4.28'
        fill='currentColor'
      />
      <path
        d='M12.74 5.49H7.16c-2.32 0-3.48 0-4.28.6a3 3 0 0 0-.58.59c-.61.8-.61 1.96-.61 4.29 0 2.32 0 3.48.6 4.28a3 3 0 0 0 .59.58c.8.61 1.96.61 4.28.61h5.33'
        stroke='currentColor'
      />
      <path d='M6.35 19.46h4.31' stroke='currentColor' />
      <path d='M8.5 19.46v-2.98' stroke='currentColor' />
    </svg>
  )
}
