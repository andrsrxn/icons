import type { Icon } from './types'

export const IconRectangle: Icon = ({
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
      data-slot='icon-ui-rectangle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.2 19.25c3.3 0 4.95 0 5.98-1.02 1.02-1.03 1.02-2.68 1.02-5.98v-.5c0-3.3 0-4.95-1.02-5.98-1.03-1.02-2.68-1.02-5.98-1.02H8.8c-3.3 0-4.95 0-5.98 1.02C1.8 6.8 1.8 8.45 1.8 11.75v.5c0 3.3 0 4.95 1.02 5.98 1.03 1.02 2.68 1.02 5.98 1.02z'
        fill='currentColor'
      />
      <path
        d='M1.8 12.25v-.5c0-3.3 0-4.95 1.02-5.98C3.85 4.75 5.5 4.75 8.8 4.75h6.4c3.3 0 4.95 0 5.98 1.02 1.02 1.03 1.02 2.68 1.02 5.98v.5c0 3.3 0 4.95-1.02 5.98-1.03 1.02-2.68 1.02-5.98 1.02H8.8c-3.3 0-4.95 0-5.98-1.02C1.8 17.2 1.8 15.55 1.8 12.25'
        stroke='currentColor'
      />
    </svg>
  )
}
