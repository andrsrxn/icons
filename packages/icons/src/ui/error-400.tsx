import type { Icon } from './types'

export const IconError400: Icon = ({
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
      data-slot='icon-ui-error-400'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M14.44 12c0 2.3-.6 4.16-2.68 4.16-2.07 0-2.67-1.86-2.67-4.15s.7-4.15 2.67-4.15c1.98 0 2.68 1.86 2.68 4.15'
        stroke='currentColor'
      />
      <path
        d='M22.4 12c0 2.3-.6 4.16-2.67 4.16-2.08 0-2.68-1.86-2.68-4.15s.7-4.15 2.68-4.15S22.4 9.72 22.4 12'
        stroke='currentColor'
      />
      <path
        d='M5.42 13.14V9.86c0-1.33 0-2-.35-2.1-.35-.12-.73.43-1.47 1.54h0l-1.55 2.28c-.47.69-.7 1.03-.56 1.3.14.26.56.26 1.39.26zm0 0v3.02m0-3.02h1.4'
        stroke='currentColor'
      />
    </svg>
  )
}
