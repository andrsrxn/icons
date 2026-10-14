import type { Icon } from './types'

export const IconHandWaving: Icon = ({
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
      data-slot='icon-ui-hand-waving'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m13.02 2.43 1.84.37.88 1.2 3.14-1.15 1.17 1.79-1.21 3.64 2.6 1.5-6.14 11.1-6.15-.13-4.5-4.46.14-9.57 2.71-.38L8.97 8.8z'
        fill='currentColor'
      />
      <path d='m15.37 13.28 4.35-7.54A1.93 1.93 0 1 0 16.4 3.8l-4.35 7.54' stroke='currentColor' />
      <path d='m19.78 13.34 1.27-2.2a1.93 1.93 0 0 0-3.34-1.92l-2.34 4.06' stroke='currentColor' />
      <path d='m12.07 11.29 3.46-5.99a1.93 1.93 0 1 0-3.34-1.92L8.45 9.87' stroke='currentColor' />
      <path
        d='M8.39 9.96V7.98a1.97 1.97 0 0 0-3.95-.1l-.26 5.2a7.4 7.4 0 0 0 3.74 6.83l1.26.72c2.43 1.4 5.56 1.01 7.23-1.24 1.75-2.36 1.99-3.66 3.48-6.23'
        stroke='currentColor'
      />
      <path d='M18.53 22.29a4.8 4.8 0 0 0 3.92-5.5' stroke='currentColor' />
      <path d='M6.88 2.16c-2.19-.73-4.5.33-5.18 2.36' stroke='currentColor' />
    </svg>
  )
}
