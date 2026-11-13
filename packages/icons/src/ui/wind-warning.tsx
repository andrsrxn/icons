import type { Icon } from './types'

export const IconWindWarning: Icon = ({
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
      data-slot='icon-ui-wind-warning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M12.12 14.84a3.17 3.17 0 1 1-2.81 4.63' stroke='currentColor' />
      <path d='M19.7 10.52a2.53 2.53 0 1 1-1.8 4.3c-.17-.16-.3-.39-.4-.6' stroke='currentColor' />
      <path d='M8.76 10.52h-7' stroke='currentColor' />
      <path d='M12.05 14.84H4' stroke='currentColor' />
      <path d='M19.75 10.52h-3.82' stroke='currentColor' />
      <path d='M12.3 6.75V2.32' stroke='currentColor' />
      <path
        d='M12.83 10.53a.53.53 0 1 1-1.07 0 .53.53 0 0 1 1.07 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
