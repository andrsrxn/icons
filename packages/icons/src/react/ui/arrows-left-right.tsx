import type { Icon } from './types'

export const IconArrowsLeftRight: Icon = ({
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
      data-slot='icon-ui-arrows-left-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M6.38 2.84 4.83 4.4c-1.33 1.33-2 2-2 2.82 0 .83.67 1.5 2 2.83l1.55 1.55'
        stroke='currentColor'
      />
      <path
        d='m17.62 12.4 1.55 1.55c1.33 1.33 2 2 2 2.83s-.67 1.5-2 2.83l-1.55 1.55'
        stroke='currentColor'
      />
      <path d='M20.49 7.22H3.03' stroke='currentColor' />
      <path d='M3.51 16.78h17.46' stroke='currentColor' />
    </svg>
  )
}
