import type { Icon } from './types'

export const IconError401: Icon = ({
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
      data-slot='icon-ui-error-401'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M16.03 12.06c0 2.55-.67 4.61-2.97 4.61s-2.97-2.06-2.97-4.61.77-4.61 2.97-4.61 2.97 2.06 2.97 4.61'
        stroke='currentColor'
      />
      <path
        d='M6.04 13.32V9.3c0-1.34 0-2-.35-2.11s-.73.44-1.47 1.55l-2.05 3c-.46.7-.7 1.04-.55 1.3.14.27.55.27 1.38.27zm0 0v3.35m0-3.35H7.6'
        stroke='currentColor'
      />
      <path
        d='m18.57 8.92 1.47-.94c.67-.43 1.01-.64 1.27-.5s.26.54.26 1.35v7.84'
        stroke='currentColor'
      />
    </svg>
  )
}
