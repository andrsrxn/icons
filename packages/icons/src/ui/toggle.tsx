import type { Icon } from './types'

export const IconToggle: Icon = ({
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
      data-slot='icon-ui-toggle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.25 12c0 2.9-2.35 5.26-5.26 5.26H7.01a5.26 5.26 0 0 1 0-10.52h9.98c2.9 0 5.26 2.35 5.26 5.26m-5.56 2.65a2.65 2.65 0 1 1 0-5.3 2.65 2.65 0 0 1 0 5.3'
        fill='currentColor'
      />
      <path
        d='M19.34 12a2.64 2.64 0 0 1-2.65 2.65A2.65 2.65 0 1 1 19.34 12'
        stroke='currentColor'
      />
      <path
        d='M1.75 12c0 2.9 2.35 5.26 5.26 5.26h9.98a5.26 5.26 0 0 0 0-10.52H7.01A5.26 5.26 0 0 0 1.75 12'
        stroke='currentColor'
      />
    </svg>
  )
}
