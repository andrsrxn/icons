import type { Icon } from './types'

export const IconMaximize: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-maximize'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M15.79 20.98c2.07 0 3.1 0 3.86-.49a3 3 0 0 0 .87-.87c.48-.75.48-1.78.48-3.86m-5.18-12.7c2.04 0 3.06 0 3.8.47a3 3 0 0 1 .9.9c.48.74.48 1.77.48 3.81M8.22 20.98c-2.08 0-3.12 0-3.87-.49a3 3 0 0 1-.86-.87c-.5-.75-.5-1.78-.5-3.86m5.23-12.7c-2.08 0-3.12 0-3.87.49a3 3 0 0 0-.86.86c-.5.75-.5 1.79-.5 3.87'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
