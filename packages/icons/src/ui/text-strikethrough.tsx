import type { Icon } from './types'

export const IconTextStrikethrough: Icon = ({
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
      data-slot='icon-ui-text-strikethrough'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M3.87 12h16.26' stroke='currentColor' />
      <path
        d='M6.82 17.65A5.5 5.5 0 0 0 12 20.71c2.53 0 5.4-1.7 5.18-4.83-.2-2.93-2.28-3.52-4.52-3.87'
        stroke='currentColor'
      />
      <path
        d='M17.02 6.3c-.45-1.7-2.55-3-5.03-3-2.47 0-5.17 1.12-5.17 4.53q0 .78.17 1.35'
        stroke='currentColor'
      />
    </svg>
  )
}
