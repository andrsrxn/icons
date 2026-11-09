import type { Icon } from './types'

export const IconMagicWand: Icon = ({
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
      data-slot='icon-ui-magic-wand'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <g clipPath='url(#a)'>
        <path
          opacity='.2'
          d='m2.41 17.17 9.25-9.24a2 2 0 0 1 2.82 0l1.45 1.45a2 2 0 0 1 0 2.83L6.7 21.45a2 2 0 0 1-2.83 0L2.41 20a2 2 0 0 1 0-2.83'
          fill='currentColor'
        />
        <path
          d='M3.26 20.59c.79.79 1.18 1.18 1.63 1.33a2 2 0 0 0 1.26 0c.45-.15.84-.54 1.63-1.33L20.74 7.63c.79-.79 1.18-1.18 1.33-1.64a2 2 0 0 0 0-1.24c-.15-.45-.54-.85-1.33-1.64s-1.18-1.18-1.64-1.33a2 2 0 0 0-1.24 0c-.46.15-.85.54-1.64 1.33L3.26 16.07c-.79.8-1.18 1.18-1.33 1.64a2 2 0 0 0 0 1.25c.15.45.54.84 1.33 1.63'
          stroke='currentColor'
        />
        <path d='m12.9 6.67 4.28 4.28' stroke='currentColor' />
        <path d='M15.66 19c1.6 0 3.33-1.73 3.33-3.33' stroke='currentColor' />
        <path d='M22.3 19c-1.6 0-3.32-1.73-3.32-3.33' stroke='currentColor' />
        <path d='M15.66 19c1.6 0 3.33 1.77 3.33 3.33' stroke='currentColor' />
        <path d='M22.3 19c-1.56 0-3.32 1.74-3.32 3.33' stroke='currentColor' />
        <path d='M1.6 5.12c1.6 0 3.33-1.74 3.33-3.33' stroke='currentColor' />
        <path d='M8.26 5.12c-1.6 0-3.34-1.74-3.34-3.33' stroke='currentColor' />
        <path d='M1.6 5.12c1.6 0 3.33 1.75 3.33 3.33' stroke='currentColor' />
        <path d='M8.26 5.12c-1.59 0-3.34 1.73-3.34 3.33' stroke='currentColor' />
        <path
          opacity='.2'
          d='m5.85 4.13-.97-1.84-1 1.84L2 5.17l1.89.97.99 2.16.97-2.16L7.9 5.08z'
          fill='currentColor'
        />
        <path
          opacity='.2'
          d='m19.95 17.54-.97-1.84-1 1.84-1.88 1.04 1.89.97.99 2.16.97-2.16L22 18.5z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
