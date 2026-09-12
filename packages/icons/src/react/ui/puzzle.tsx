import type { Icon } from './types'

export const IconPuzzle: Icon = ({
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
      data-slot='icon-ui-puzzle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M19.28 19.42v-.52c0-.5-.4-.9-.9-.9h-.69a2.93 2.93 0 0 1 0-5.85h.69c.5 0 .9-.4.9-.9V9.82c0-.92 0-1.38-.15-1.75a2 2 0 0 0-1.1-1.09 5 5 0 0 0-1.74-.15h-.5a1 1 0 0 1-1-1h0v-.85a3.19 3.19 0 0 0-6.37 0v.87a1 1 0 0 1-1 1h-.45c-.84 0-1.27 0-1.6.12a2 2 0 0 0-1.18 1.18c-.13.33-.13.75-.13 1.6v8.51c0 1.89 0 2.83.59 3.42.58.58 1.53.58 3.41.58h8.37c.79 0 1.18 0 1.5-.1a2 2 0 0 0 1.24-1.24c.1-.32.1-.71.1-1.5'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M19.28 19.42v-.52c0-.5-.4-.9-.9-.9h-.69a2.93 2.93 0 0 1 0-5.85h.69c.5 0 .9-.4.9-.9V9.82c0-.92 0-1.38-.15-1.75a2 2 0 0 0-1.1-1.09 5 5 0 0 0-1.74-.15h-.5a1 1 0 0 1-1-1h0v-.85a3.19 3.19 0 0 0-6.37 0v.87a1 1 0 0 1-1 1h-.45c-.84 0-1.27 0-1.6.12a2 2 0 0 0-1.18 1.18c-.13.33-.13.75-.13 1.6v8.51c0 1.89 0 2.83.59 3.42.58.58 1.53.58 3.41.58h8.37c.79 0 1.18 0 1.5-.1a2 2 0 0 0 1.24-1.24c.1-.32.1-.71.1-1.5'
        stroke='currentColor'
      />
    </svg>
  )
}
