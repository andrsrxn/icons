import type { Icon } from './types'

export const IconNavigation: Icon = ({
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
      data-slot='icon-ui-navigation'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.9 9.02C2.57 5.45 1.89 3.66 2.8 2.75s2.7-.24 6.26 1.11l7.11 2.7c4.06 1.53 6.08 2.3 6.1 3.66s-2 2.18-6.04 3.8a4 4 0 0 0-1.47.76c-.28.3-.43.68-.74 1.45-1.59 3.98-2.38 5.97-3.73 5.98h-.06c-1.35-.04-2.1-2.04-3.62-6.04z'
        fill='currentColor'
      />
      <path
        d='M3.9 9.02C2.57 5.45 1.89 3.66 2.8 2.75s2.7-.24 6.26 1.11l7.11 2.7c4.06 1.53 6.08 2.3 6.1 3.66s-2 2.18-6.04 3.8a4 4 0 0 0-1.47.76c-.28.3-.43.68-.74 1.45-1.59 3.98-2.38 5.97-3.73 5.98h-.06c-1.35-.04-2.1-2.04-3.62-6.04z'
        stroke='currentColor'
      />
    </svg>
  )
}
