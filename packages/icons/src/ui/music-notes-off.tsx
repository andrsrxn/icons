import type { Icon } from './types'

export const IconMusicNotesOff: Icon = ({
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
      data-slot='icon-ui-music-notes-off'
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
      <path
        d='M17.75 14.55c1.5 0 2.73 1.23 2.73 2.73m-4.98-1.55q-.46.68-.48 1.55a2.73 2.73 0 0 0 4.28 2.25'
        stroke='currentColor'
      />
      <path
        d='M20.48 17.4V6.89c0-2.57 0-3.86-.85-4.45-.84-.6-2.05-.18-4.47.67l-2.68.94h0c-1.81.63-2.78.97-3.35 1.64'
        stroke='currentColor'
      />
      <path d='M8.46 18.89V8.47' stroke='currentColor' />
      <path d='m12.29 8.8 7.83-2.92' stroke='currentColor' />
      <path d='m8.46 10.17 1.06-.4' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
