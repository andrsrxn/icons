import type { Icon } from './types'

export const IconArrowsRight: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

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
      data-slot='icon-ui-arrows-right'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m6.06 3.86-.5.5c-1.33 1.33-2 2-2 2.82 0 .83.67 1.5 2 2.83l.5.5'
        stroke='currentColor'
      />
      <path
        d='m6.06 13.49-.5.5c-1.33 1.32-2 2-2 2.82 0 .83.67 1.5 2 2.83l.5.5'
        stroke='currentColor'
      />
      <path d='M20.45 7.19H4.17' stroke='currentColor' />
      <path d='M20.45 16.81H4.17' stroke='currentColor' />
    </svg>
  )
}
