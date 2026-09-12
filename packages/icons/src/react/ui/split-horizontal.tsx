import type { Icon } from './types'

export const IconSplitHorizontal: Icon = ({
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
      data-slot='icon-ui-split-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.73'
        y='4.54'
        width='20.53'
        height='14.93'
        rx='3'
        fill='currentColor'
      />
      <rect x='1.73' y='4.54' width='20.53' height='14.93' rx='3' stroke='currentColor' />
      <path d='M12 2.05v19.9' stroke='currentColor' />
    </svg>
  )
}
