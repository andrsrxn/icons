import type { Icon } from './types'

export const IconUndo: Icon = ({
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
      data-slot='icon-ui-undo'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M4.6 8.6h9.86a5.69 5.69 0 0 1 0 11.36h-.3' stroke='currentColor' />
      <path
        d='M8.03 4.04 6.3 5.76c-1.33 1.33-2 2-2 2.83s.67 1.5 2 2.83l1.73 1.73'
        stroke='currentColor'
      />
    </svg>
  )
}
