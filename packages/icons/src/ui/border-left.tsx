import type { Icon } from './types'

export const IconBorderLeft: Icon = ({
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
      data-slot='icon-ui-border-left'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.76 15.24c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h6.48c2.83 0 4.25 0 5.12-.88s.88-2.3.88-5.12V8.76c0-2.83 0-4.24-.87-5.12-.88-.88-2.3-.88-5.13-.88H8.76c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12z'
        fill='currentColor'
      />
      <path
        d='M12 15.36V8.63M8.63 12h6.74M5.3 2.76a2.57 2.57 0 0 0-2.56 2.56v13.35a2.57 2.57 0 0 0 2.56 2.57M18.6 2.7h.05a2.6 2.6 0 0 1 2.61 2.62M18.73 21.3h.06a2.47 2.47 0 0 0 2.47-2.48m-.06-7.98v2.26m-8.11 8.1h-2.25m.08-18.48h2.24'
        stroke='currentColor'
      />
    </svg>
  )
}
