import type { Icon } from './types'

export const IconError403: Icon = ({
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
      data-slot='icon-ui-error-403'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M15.23 12c0 2.33-.6 4.22-2.72 4.22-2.11 0-2.72-1.89-2.72-4.22s.7-4.22 2.72-4.22c2.01 0 2.72 1.89 2.72 4.22'
        stroke='currentColor'
      />
      <path
        d='M5.8 13.15v-3.4c0-1.32 0-2-.36-2.1-.35-.1-.73.44-1.47 1.55l-1.63 2.4c-.46.68-.7 1.02-.55 1.29.14.26.55.26 1.38.26zm0 0v3.07m0-3.07h1.42'
        stroke='currentColor'
      />
      <path
        d='M17.8 15.32c1 1.62 4.58 1.73 4.58-1.33 0-1.54-1.18-1.98-2.47-2 1.14-.04 2.2-.58 2.2-2.03 0-2.87-3.38-2.76-4.3-1.25'
        stroke='currentColor'
      />
    </svg>
  )
}
