import type { Icon } from './types'

export const IconSquareBracketsOff: Icon = ({
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
      data-slot='icon-ui-square-brackets-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M8.11 21.29c-1.2 0-1.8 0-2.3-.18A3 3 0 0 1 4 19.28c-.18-.48-.18-1.08-.18-2.3V7.02c0-1.2 0-1.8.18-2.3'
        stroke='currentColor'
      />
      <path d='M8.11 2.71c-.7 0-1.2 0-1.6.04' stroke='currentColor' />
      <path
        d='M15.89 2.71c1.2 0 1.8 0 2.3.18A3 3 0 0 1 20 4.72c.18.48.18 1.08.18 2.3v9.32'
        stroke='currentColor'
      />
      <path d='M15.89 21.29c1.2 0 1.8 0 2.3-.18a3 3 0 0 0 1.55-1.25' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
