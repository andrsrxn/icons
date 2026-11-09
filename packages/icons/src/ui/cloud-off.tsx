import type { Icon } from './types'

export const IconCloudOff: Icon = ({
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
      data-slot='icon-ui-cloud-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m1.34 14.51 2.83 3.52 14.27.47s1.7-.2 2.63-1.22c.34-.38.83-1.01.83-1.01v-4.55l-3.32-2.5-1.74 1.28-.94-3.72-4.08-1.84-2.42.7a4.6 4.6 0 0 0-2.42 1.64l-.72 2.15-3.2 1.07z'
        fill='currentColor'
      />
      <path
        d='M5.58 18.3c-1.1 0-2.17-.49-2.9-1.29A4.4 4.4 0 0 1 1.5 14a4.2 4.2 0 0 1 4.07-4.31 2.9 2.9 0 0 1 2.78 2'
        stroke='currentColor'
      />
      <path d='M18.25 18.3H5.65' stroke='currentColor' />
      <path d='M16.49 11.97c.2-1 .23-2.5-.62-3.97a5.2 5.2 0 0 0-6.25-2.32' stroke='currentColor' />
      <path d='M7.26 7.3a4 4 0 0 0-.85 1.87' stroke='currentColor' />
      <path
        d='M16.63 10.09a3.6 3.6 0 0 1 3.45.11 4.37 4.37 0 0 1 1.6 5.97q-.33.6-.74 1.02'
        stroke='currentColor'
      />
      <path d='m2.67 2.67 18.66 18.66' stroke='currentColor' />
    </svg>
  )
}
