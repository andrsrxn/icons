import type { Icon } from './types'

export const IconResendAll: Icon = ({
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
      data-slot='icon-ui-resend-all'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m12.11 5.85.02 2.56c-6.5 0-8.46 3.17-10.19 7.2-.18.44.3.86.72.63 5.49-2.97 6.54-2.06 9.47-2.06l-.02 2.38a1 1 0 0 0 1.71.71l4.58-4.55a2 2 0 0 0 .03-2.8l-4.6-4.77a1 1 0 0 0-1.72.7'
        fill='currentColor'
      />
      <path
        d='M12.07 8.74V8.5c0-2.04 0-3.06.62-3.31.61-.26 1.34.46 2.79 1.89l1.43 1.42c1.36 1.34 2.04 2 2.04 2.84s-.68 1.5-2.04 2.85l-1.43 1.42c-1.45 1.43-2.18 2.15-2.8 1.89-.6-.26-.6-1.28-.6-3.32v-.32c-2.27 0-4.22-.64-8.6 2.08-1 .62-1.49.93-1.77.68-.28-.24-.05-.74.4-1.72 1.8-3.95 5.34-6.15 9.96-6.15'
        stroke='currentColor'
      />
      <path
        d='m17.35 17.7 2.76-3c1.47-1.6 2.2-2.4 2.2-3.37s-.73-1.78-2.2-3.38l-2.76-3.03'
        stroke='currentColor'
      />
    </svg>
  )
}
