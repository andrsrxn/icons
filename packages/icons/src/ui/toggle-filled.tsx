import type { Icon } from './types'

export const IconToggleFilled: Icon = ({
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
      data-slot='icon-ui-toggle-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.75 12c0 2.9 2.35 5.26 5.26 5.26h9.98a5.26 5.26 0 0 0 0-10.52H7.01A5.26 5.26 0 0 0 1.75 12m18.34 0a3.4 3.4 0 1 1-6.8 0 3.4 3.4 0 0 1 6.8 0'
        fill='currentColor'
      />
      <path
        d='M1.75 12c0 2.9 2.35 5.26 5.26 5.26h9.98a5.26 5.26 0 0 0 0-10.52H7.01A5.26 5.26 0 0 0 1.75 12'
        stroke='currentColor'
      />
    </svg>
  )
}
