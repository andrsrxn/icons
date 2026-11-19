import type { Icon } from './types'

export const IconSyringe: Icon = ({
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
      data-slot='icon-ui-syringe'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.39 5.26c.67-.68 1-1.02 1.42-1.02s.76.34 1.43 1.03l1.65 1.7c.65.66.98.99.97 1.4 0 .4-.33.74-.98 1.4l-9.3 9.36c-.22.23-.33.34-.47.41s-.3.1-.6.15l-2.3.4c-1.34.24-2 .36-2.37-.03-.37-.38-.23-1.04.06-2.36l.41-1.84c.06-.29.1-.43.16-.55.07-.13.17-.23.37-.43z'
        fill='currentColor'
      />
      <path
        d='m15.74 3.83 4.5 4.5-9.5 9.5a9 9 0 0 1-1.87 1.6 8 8 0 0 1-2.38.61l-3 .54.74-3.42c.24-1.15.37-1.72.64-2.22.28-.51.7-.93 1.52-1.75z'
        stroke='currentColor'
      />
      <path d='m14.57 2.66 6.84 6.84' stroke='currentColor' />
      <path d='m18.52 2.05 3.5 3.5' stroke='currentColor' />
      <path d='m12.87 7.18 1.79 1.8' stroke='currentColor' />
      <path d='m10.33 9.77 1.79 1.8' stroke='currentColor' />
      <path d='m7.72 12.3 1.8 1.8' stroke='currentColor' />
      <path d='M20.27 3.8 18 6.08' stroke='currentColor' />
      <path d='m3.49 20.58-1.61 1.6' stroke='currentColor' />
    </svg>
  )
}
