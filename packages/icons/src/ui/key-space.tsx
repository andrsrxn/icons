import type { Icon } from './types'

export const IconKeySpace: Icon = ({
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
      data-slot='icon-ui-key-space'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M21.38 8.73c0 2.37 0 3.55-.49 4.45a4 4 0 0 1-1.6 1.6c-.9.49-2.08.49-4.44.49h-5.7c-2.36 0-3.54 0-4.44-.49a4 4 0 0 1-1.6-1.6c-.49-.9-.49-2.08-.49-4.45'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M15.38 14.97c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-.24H2.62v.24c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88z'
        fill='currentColor'
      />
    </svg>
  )
}
