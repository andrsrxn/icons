import type { Icon } from './types'

export const IconSignalFull: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='signal-full'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m6.35 14.22 10.46-7.7c1.4-1.03 2.1-1.54 2.64-1.27.55.28.55 1.15.55 2.88v7.7c0 .95 0 1.42-.3 1.71-.29.3-.76.3-1.7.3H7.54c-2.51 0-3.77 0-4-.7-.22-.68.8-1.43 2.81-2.92'
        fill='currentColor'
      />
      <path
        d='m7.67 12.9-1.4 1.03c-1.72 1.26-2.57 1.9-2.7 2.44a1.5 1.5 0 0 0 .48 1.45c.43.37 1.49.37 3.62.37m0-5.3v5.3m0-5.3 4.11-3.03M7.67 18.2h4.11m0 0V9.86m0 8.33h4.11m-4.11-8.33 4.11-3.02m0 11.35H17c1.41 0 2.12 0 2.56-.44s.44-1.14.44-2.56V8.91c0-1.84 0-2.76-.45-3.2a1.5 1.5 0 0 0-.81-.42c-.62-.1-1.37.45-2.85 1.55m0 11.35V6.84'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
