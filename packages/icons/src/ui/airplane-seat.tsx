import type { Icon } from './types'

export const IconAirplaneSeat: Icon = ({
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
      data-slot='icon-ui-airplane-seat'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.7 16.24c0 .62-.5 1.13-1.13 1.13H9.27c-1.5 0-2.24 0-2.78-.42s-.73-1.14-1.1-2.58l-2.45-9.5c-.1-.38-.15-.57-.16-.74a2 2 0 0 1 1.3-2.05c.15-.06.34-.1.73-.17.33-.06.5-.1.7-.1A3.2 3.2 0 0 1 8.15 3.1a17 17 0 0 1 1.48 3.37 28 28 0 0 1 .86 6.39s2.8-1.04 5.6-1q1.43.04 2.6.28c1.89.38 3 2.17 3 4.1'
        fill='currentColor'
      />
      <path
        d='M10.23 13.09s.04-3.71-.79-6.63a20 20 0 0 0-1.29-3.2 3.2 3.2 0 0 0-2.8-1.43c-.17 0-.32.04-.6.1-.33.06-.5.09-.62.13a2 2 0 0 0-1.35 2.13c.02.13.06.3.14.6l2.47 9.58c.37 1.44.56 2.16 1.1 2.58s1.29.42 2.77.42h11.38c.58 0 1.06-.48 1.06-1.06 0-1.95-1.2-3.71-3.12-4.01q-1.1-.19-2.45-.22c-2.8-.03-5.9 1-5.9 1'
        stroke='currentColor'
      />
      <path d='M10.73 8.53h8.64' stroke='currentColor' />
      <path d='m14.46 22.26 2.6-4.9' stroke='currentColor' />
      <path d='m10.98 22.26 2.59-4.9' stroke='currentColor' />
      <path d='M8.06 22.26h9.98' stroke='currentColor' />
    </svg>
  )
}
