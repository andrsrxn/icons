import type { Icon } from './types'

export const IconBorderEnd: Icon = ({
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
      data-slot='icon-ui-border-end'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.24 15.24c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H8.76c-2.83 0-4.25 0-5.12-.88s-.88-2.3-.88-5.12V8.76c0-2.83 0-4.24.88-5.12.87-.88 2.29-.88 5.12-.88h6.48c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12z'
        fill='currentColor'
      />
      <path
        d='M12 15.36V8.63M15.37 12H8.64M18.7 2.76a2.57 2.57 0 0 1 2.56 2.56v13.35a2.57 2.57 0 0 1-2.56 2.57M5.4 2.7h-.05a2.6 2.6 0 0 0-2.61 2.62M5.27 21.3H5.2a2.47 2.47 0 0 1-2.47-2.48m.07-7.98v2.26m8.12 8.1h2.24m-.07-18.48h-2.25'
        stroke='currentColor'
      />
    </svg>
  )
}
