import type { Icon } from './types'

export const IconTerminal: Icon = ({
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
      data-slot='icon-ui-terminal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m3.7 5 3.47 2.49c2.06 1.48 3.1 2.22 3.1 3.25s-1.04 1.77-3.1 3.25l-3.47 2.5'
        stroke='currentColor'
      />
      <path d='M20.47 18h-9.9' stroke='currentColor' />
    </svg>
  )
}
