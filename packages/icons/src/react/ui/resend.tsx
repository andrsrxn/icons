import type { Icon } from './types'

export const IconResend: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-resend'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m14.07 4.63.03 3.45c-7.77 0-10.02 3.85-12.07 8.69-.18.44.3.86.72.63 6.64-3.64 7.86-2.55 11.35-2.55l-.03 3.22a1 1 0 0 0 1.7.71l5.93-5.88a2 2 0 0 0 .03-2.8l-5.94-6.17a1 1 0 0 0-1.72.7'
        fill='currentColor'
      />
      <path
        d='M14.03 7.34v1.13c-5.6 0-9.85 2.74-11.9 7.65-.42 1.01-.63 1.52-.35 1.75.29.24.78-.08 1.77-.71 5.41-3.49 7.75-2.69 10.48-2.69v1.21c0 2.04 0 3.06.61 3.32s1.34-.46 2.79-1.9l2.78-2.74c1.36-1.34 2.04-2.01 2.04-2.85 0-.83-.68-1.5-2.04-2.84l-2.78-2.75c-1.45-1.43-2.18-2.15-2.79-1.9-.62.26-.62 1.28-.62 3.32'
        stroke='currentColor'
      />
    </svg>
  )
}
