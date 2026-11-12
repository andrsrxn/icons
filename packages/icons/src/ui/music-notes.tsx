import type { Icon } from './types'

export const IconMusicNotes: Icon = ({
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
      data-slot='icon-ui-music-notes'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M18.93 6.36c.85-.32 1.28-.48 1.46-.84.18-.37.03-.8-.26-1.67l-.07-.2c-.3-.93-.45-1.39-.84-1.57s-.83-.02-1.74.31L9.83 5.2c-.66.24-1 .36-1.18.63s-.16.63-.13 1.33v.26c.06 1.25.09 1.87.51 2.16.43.28 1.01.06 2.19-.37z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M8.46 19.07a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M20.48 17.28a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0'
        fill='currentColor'
      />
      <path d='M8.46 19.07a2.73 2.73 0 1 0-5.46 0 2.73 2.73 0 0 0 5.46 0' stroke='currentColor' />
      <path d='M20.48 17.28a2.73 2.73 0 1 0-5.46 0 2.73 2.73 0 0 0 5.46 0' stroke='currentColor' />
      <path
        d='M8.46 18.89V9.7c0-2.06 0-3.09.55-3.87.56-.77 1.53-1.11 3.47-1.8l2.68-.93c2.42-.85 3.63-1.27 4.47-.67.85.6.85 1.88.85 4.45v10.5'
        stroke='currentColor'
      />
      <path d='m8.46 10.17 11.66-4.3' stroke='currentColor' />
    </svg>
  )
}
