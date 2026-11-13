import type { Icon } from './types'

export const IconFilms: Icon = ({
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
      data-slot='icon-ui-films'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M4.7 22.3a1 1 0 0 0 1-1V9.37a1 1 0 0 0-1-1 3 3 0 0 0-2.98 2.99v7.96a3 3 0 0 0 2.99 2.98'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M12.32 8.04V2.7a1 1 0 0 0-.99-1 3 3 0 0 0-2.98 2.98v3.36z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M12.61 22.3a1 1 0 0 1-1-1V9.37a1 1 0 0 1 1-1 3 3 0 0 1 2.99 2.99v7.96a3 3 0 0 1-2.99 2.98'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M19.24 15.62a1 1 0 0 1-1-1V2.7a1 1 0 0 1 1-1 3 3 0 0 1 2.98 2.98v7.96a3 3 0 0 1-2.98 2.98'
        fill='currentColor'
      />
      <path
        d='M1.72 16.3v-1.92c0-2.83 0-4.25.88-5.12s2.3-.88 5.12-.88h1.93c2.83 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12v1.92c0 2.83 0 4.24-.88 5.12s-2.29.88-5.12.88H7.72c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12'
        stroke='currentColor'
      />
      <path
        d='M15.7 15.62h.58c2.83 0 4.24 0 5.12-.88.88-.87.88-2.29.88-5.12V7.7c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-1.93c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v.33'
        stroke='currentColor'
      />
      <path d='M15.37 15.34H2' stroke='currentColor' />
      <path d='M22 8.66h-7.95' stroke='currentColor' />
      <path d='M5.7 8.66v13.35' stroke='currentColor' />
      <path d='M12.32 1.99V8.1' stroke='currentColor' />
      <path d='M11.62 8.66v13.35' stroke='currentColor' />
      <path d='M18.24 1.99v13.35' stroke='currentColor' />
      <path d='M5.33 11.86H1.78' stroke='currentColor' />
      <path d='M11.96 5.18H8.4' stroke='currentColor' />
      <path d='M5.47 18.82h-3.4' stroke='currentColor' />
      <path d='M15.6 11.86h-3.56' stroke='currentColor' />
      <path d='M22.22 5.18h-3.55' stroke='currentColor' />
      <path d='M15.31 18.82h-3.4' stroke='currentColor' />
      <path d='M21.94 12.14h-3.41' stroke='currentColor' />
    </svg>
  )
}
