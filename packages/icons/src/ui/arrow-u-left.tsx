import type { Icon } from './types'

export const IconArrowULeft: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-arrow-u-left'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M4.54 8.58h9.9a5.71 5.71 0 0 1 0 11.42H7.11' stroke='currentColor' />
      <path
        d='M7.92 4 6.18 5.74c-1.34 1.34-2 2-2 2.83s.66 1.5 2 2.83l1.74 1.75'
        stroke='currentColor'
      />
    </svg>
  )
}
