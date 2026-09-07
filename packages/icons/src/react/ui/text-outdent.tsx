import type { Icon } from './types'

export const IconTextOutdent: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-text-outdent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'text-outdent-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'text-outdent-title'}>{title}</title> : null}
      <path
        d='M3 17.85h18M3 11.98h18M10.2 6.1H21M7.62 3.83l-1.1.39c-2.2.78-3.3 1.17-3.3 1.88 0 .7 1.1 1.1 3.3 1.88l1.1.4'
        stroke='currentColor'
      />
    </svg>
  )
}
