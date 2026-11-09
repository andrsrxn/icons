import type { Icon } from './types'

export const IconError404: Icon = ({
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
      data-slot='icon-ui-error-404'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M14.8 12c0 2.31-.6 4.2-2.7 4.2S9.4 14.3 9.4 12s.7-4.2 2.7-4.2 2.7 1.88 2.7 4.2'
        stroke='currentColor'
      />
      <path
        d='M5.71 13.14V9.8c0-1.33 0-2-.35-2.1-.35-.12-.73.44-1.47 1.54l-1.6 2.35c-.46.69-.7 1.03-.55 1.3.14.26.55.26 1.38.26zm0 0v3.05m0-3.05h1.42'
        stroke='currentColor'
      />
      <path
        d='M21.15 13.14V9.8c0-1.33 0-2-.36-2.1-.35-.12-.72.44-1.47 1.54l-1.6 2.35c-.46.69-.7 1.03-.55 1.3.14.26.55.26 1.38.26zm0 0v3.05m0-3.05h1.41'
        stroke='currentColor'
      />
    </svg>
  )
}
