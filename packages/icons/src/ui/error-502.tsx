import type { Icon } from './types'

export const IconError502: Icon = ({
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
      data-slot='icon-ui-error-502'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M15.32 12.02c0 2.44-.64 4.43-2.86 4.43s-2.85-1.99-2.85-4.43c0-2.45.74-4.43 2.85-4.43s2.86 1.98 2.86 4.43'
        stroke='currentColor'
      />
      <path
        d='M6.62 7.55H2.45a.5.5 0 0 0-.5.45l-.3 2.71c-.04.42.44.74.85.61 1.79-.56 4.4-.26 4.4 2.27 0 3.57-4.2 3.44-5.36 1.55'
        stroke='currentColor'
      />
      <path
        d='M18.04 8.53c.96-1.56 4.43-1.67 4.43 1.29 0 2.13-2.81 3.15-4.37 5.84-.19.32.05.69.42.69h4.06'
        stroke='currentColor'
      />
    </svg>
  )
}
