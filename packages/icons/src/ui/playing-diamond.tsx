import type { Icon } from './types'

export const IconPlayingDiamond: Icon = ({
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
      data-slot='icon-ui-playing-diamond'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M19.1 14.82c1.14-1.34 1.71-2 1.71-2.82s-.57-1.48-1.7-2.82l-4.3-5.02C13.5 2.6 12.85 1.84 12 1.84s-1.5.77-2.82 2.31l-4.3 5.03c-1.16 1.34-1.73 2-1.73 2.82s.57 1.48 1.72 2.82l4.3 5.03c1.33 1.54 1.99 2.31 2.83 2.3.84 0 1.5-.76 2.82-2.3z'
        fill='currentColor'
      />
      <path
        d='M19.1 14.82c1.14-1.34 1.71-2 1.71-2.82s-.57-1.48-1.7-2.82l-4.3-5.02C13.5 2.6 12.85 1.84 12 1.84s-1.5.77-2.82 2.31l-4.3 5.03c-1.16 1.34-1.73 2-1.73 2.82s.57 1.48 1.72 2.82l4.3 5.03c1.33 1.54 1.99 2.31 2.83 2.3.84 0 1.5-.76 2.82-2.3z'
        stroke='currentColor'
      />
    </svg>
  )
}
