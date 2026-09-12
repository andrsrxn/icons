import type { Icon } from './types'

export const IconArrowCornerRightDown: Icon = ({
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
      data-slot='icon-ui-arrow-corner-right-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M15.5 19v-6.33c0-3.77 0-5.65-1.17-6.82-1.17-1.18-3.05-1.18-6.82-1.18H5'
        stroke='currentColor'
      />
      <path
        d='m19.77 16.06-1.43 1.43c-1.34 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-1.44-1.43'
        stroke='currentColor'
      />
    </svg>
  )
}
