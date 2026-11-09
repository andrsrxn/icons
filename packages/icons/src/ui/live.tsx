import type { Icon } from './types'

export const IconLive: Icon = ({
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
      data-slot='icon-ui-live'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.48 20.54H2.42' stroke='currentColor' />
      <path d='M21.48 3.5H2.42' stroke='currentColor' />
      <path d='M7.65 15.66V8.2' stroke='currentColor' />
      <path
        d='m10.12 8.2 2.25 6.37c.24.66.36 1 .57 1s.33-.34.57-1l2.25-6.37'
        stroke='currentColor'
      />
      <path
        d='M21.6 15.66h-2.7c-.47 0-.71 0-.86-.14-.14-.15-.14-.39-.14-.86V9.2c0-.47 0-.7.14-.85s.39-.15.86-.15h2.72'
        stroke='currentColor'
      />
      <path d='M17.89 11.93h2.77' stroke='currentColor' />
      <path d='M2.3 8.2v6.46c0 .47 0 .7.15.86.14.14.38.14.85.14h2.17' stroke='currentColor' />
    </svg>
  )
}
