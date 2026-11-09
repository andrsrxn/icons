import type { Icon } from './types'

export const IconEyeScan: Icon = ({
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
      data-slot='icon-ui-eye-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M6.85 10.44A6.7 6.7 0 0 1 12 7.87c2.46 0 4.16 1.4 5.15 2.57.47.56.7.83.7 1.56s-.23 1-.7 1.57a6.7 6.7 0 0 1-5.15 2.6 6.7 6.7 0 0 1-5.16-2.6c-.46-.56-.7-.84-.7-1.57s.24-1 .71-1.56'
        stroke='currentColor'
      />
      <path
        d='M15.91 21.27c1.76 0 2.64 0 3.33-.3a3.5 3.5 0 0 0 1.75-1.76c.31-.68.31-1.56.31-3.33'
        stroke='currentColor'
      />
      <path
        d='M15.95 2.76c1.72 0 2.59 0 3.26.3.8.35 1.44.99 1.8 1.79.3.67.3 1.54.3 3.27'
        stroke='currentColor'
      />
      <path
        d='M8.1 21.27c-1.77 0-2.65 0-3.34-.3a3.5 3.5 0 0 1-1.75-1.76c-.31-.68-.31-1.56-.31-3.33h0'
        stroke='currentColor'
      />
      <path
        d='M8.1 2.76c-1.77 0-2.65 0-3.34.3a3.5 3.5 0 0 0-1.75 1.76c-.31.69-.31 1.57-.31 3.34h0'
        stroke='currentColor'
      />
      <circle cx='12.01' cy='12' r='1.74' stroke='currentColor' />
      <path
        opacity='.2'
        d='M14.29 2.71c3.3 0 4.95 0 5.97 1.03C21.3 4.76 21.3 6.4 21.3 9.7v4.58c0 3.3 0 4.95-1.03 5.97-1.02 1.03-2.67 1.03-5.97 1.03H9.7c-3.3 0-4.95 0-5.97-1.03C2.7 19.24 2.7 17.6 2.7 14.3V9.7c0-3.3 0-4.95 1.03-5.97C4.76 2.7 6.4 2.7 9.7 2.7zM12 7.87c-3.03 0-4.9 2.12-5.72 3.32-.33.5-.33 1.13 0 1.62.8 1.21 2.67 3.35 5.72 3.35s4.91-2.14 5.72-3.35c.33-.5.33-1.13 0-1.62-.82-1.2-2.7-3.32-5.72-3.32M13.75 12a1.74 1.74 0 1 1-3.48 0 1.74 1.74 0 0 1 3.48 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
