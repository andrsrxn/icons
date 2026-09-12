import type { Icon } from './types'

export const IconTextStrikethrough: Icon = ({
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
      data-slot='icon-ui-text-strikethrough'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M16.93 6.55C16.5 4.93 14.43 3.7 12 3.7S6.63 5.1 6.93 8.03c.65 6.33 9.7 1.41 10.15 7.68.21 3-2.6 4.61-5.08 4.61s-4.27-1.26-5.07-2.91'
        stroke='currentColor'
      />
      <path d='M3.87 12h16.26' stroke='currentColor' />
    </svg>
  )
}
