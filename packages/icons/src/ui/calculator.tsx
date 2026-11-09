import type { Icon } from './types'

export const IconCalculator: Icon = ({
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
      data-slot='icon-ui-calculator'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.25 7.9c0-1.09 0-1.64-.1-2.09a4 4 0 0 0-2.99-2.98c-.45-.1-1-.1-2.09-.1H7.93c-1.1 0-1.64 0-2.1.1a4 4 0 0 0-2.97 2.98c-.1.45-.1 1-.1 2.1z'
        fill='currentColor'
      />
      <path
        d='M13.25 21.27h-2.5c-3.77 0-5.65 0-6.83-1.17s-1.17-3.06-1.17-6.83v-2.54c0-3.77 0-5.66 1.17-6.83 1.18-1.17 3.06-1.17 6.83-1.17h2.5c3.77 0 5.65 0 6.83 1.17s1.17 3.06 1.17 6.83v2.54c0 3.77 0 5.66-1.17 6.83-1.18 1.17-3.06 1.17-6.83 1.17'
        stroke='currentColor'
      />
      <path d='M3.03 7.9h17.94' stroke='currentColor' />
      <path d='M6.54 11.04H8' stroke='currentColor' />
      <path d='M11.27 11.04h1.46' stroke='currentColor' />
      <path d='M16 11.04h1.46' stroke='currentColor' />
      <path d='M6.54 14.52H8' stroke='currentColor' />
      <path d='M6.54 17.84H8' stroke='currentColor' />
      <path d='M11.27 14.52h1.46' stroke='currentColor' />
      <path d='M16 14.52h1.46' stroke='currentColor' />
      <path d='M11.27 17.84h6.19' stroke='currentColor' />
    </svg>
  )
}
