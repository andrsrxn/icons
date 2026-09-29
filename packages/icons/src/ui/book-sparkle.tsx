import type { Icon } from './types'

export const IconBookSparkle: Icon = ({
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
      data-slot='icon-ui-book-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.97 5.75c0-1.89 0-2.83-.58-3.42-.59-.58-1.53-.58-3.42-.58H7.03c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42v8.74c0 1.88 0 2.83.58 3.41.59.59 1.53.59 3.42.59h9.94c1.89 0 2.83 0 3.42-.59.58-.58.58-1.53.58-3.41zM10.2 8.45c.3-.3.44-.46.58-.56a2 2 0 0 1 2.38.01c.14.11.29.27.58.58.25.26.37.4.46.53a2 2 0 0 1 .05 2.16c-.09.14-.2.28-.45.56-.3.34-.44.52-.6.64a2 2 0 0 1-2.47.01c-.15-.12-.3-.29-.6-.63a5 5 0 0 1-.46-.56 2 2 0 0 1 .05-2.2c.09-.13.22-.26.48-.53'
        fill='currentColor'
      />
      <path
        d='M3.03 7.75c0-2.83 0-4.25.88-5.12s2.29-.88 5.12-.88h5.94c2.83 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12v4.74c0 2.83 0 4.24-.88 5.12s-2.29.88-5.12.88H3.03z'
        stroke='currentColor'
      />
      <path
        d='M3.03 18.49c0 1.66 0 2.49.46 3.04l.26.26c.56.46 1.39.46 3.04.46h8.85c1.66 0 2.49 0 3.04-.46l.26-.26c.46-.55.46-1.38.46-3.04'
        stroke='currentColor'
      />
      <path d='M7.29 10.12C9.56 10.12 12 7.66 12 5.4' stroke='currentColor' />
      <path d='M16.71 10.12C14.45 10.12 12 7.67 12 5.4' stroke='currentColor' />
      <path d='M7.29 10.12c2.26 0 4.71 2.49 4.71 4.71' stroke='currentColor' />
      <path d='M16.71 10.12c-2.23 0-4.71 2.46-4.71 4.71' stroke='currentColor' />
    </svg>
  )
}
