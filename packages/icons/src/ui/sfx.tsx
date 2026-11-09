import type { Icon } from './types'

export const IconSfx: Icon = ({
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
      data-slot='icon-ui-sfx'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
      <path d='m16.48 15.52 4.87-7.04' stroke='currentColor' />
      <path d='m21.35 15.52-4.87-7.04' stroke='currentColor' />
      <path
        d='M7.34 9.3c-.44-.4-1.2-.95-2.3-.95s-2.3.61-2.3 1.9c0 2.77 4.6.56 4.6 3.38 0 1.31-1.18 2.02-2.3 2.02s-1.87-.35-2.4-1.12'
        stroke='currentColor'
      />
      <path d='M10.18 15.52V9.48c0-.47 0-.7.15-.85s.38-.15.85-.15h2.88' stroke='currentColor' />
      <path d='M10.18 12h2.92' stroke='currentColor' />
    </svg>
  )
}
