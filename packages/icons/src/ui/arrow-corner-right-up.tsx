import type { Icon } from './types'

export const IconArrowCornerRightUp: Icon = ({
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
      data-slot='icon-ui-arrow-corner-right-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M15.5 5v6.34c0 3.77 0 5.66-1.17 6.83s-3.05 1.17-6.82 1.17H5' stroke='currentColor' />
      <path
        d='m19.77 7.96-1.43-1.44c-1.34-1.34-2-2-2.83-2s-1.5.66-2.83 2l-1.44 1.44'
        stroke='currentColor'
      />
    </svg>
  )
}
