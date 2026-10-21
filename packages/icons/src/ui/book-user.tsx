import type { Icon } from './types'

export const IconBookUser: Icon = ({
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
      data-slot='icon-ui-book-user'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.97 5.75c0-1.89 0-2.83-.58-3.42-.59-.58-1.53-.58-3.42-.58H7.03c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42v8.74c0 1.88 0 2.83.58 3.41.59.59 1.53.59 3.42.59h9.94c1.89 0 2.83 0 3.42-.59.58-.58.58-1.53.58-3.41zM8.12 14.82a3.88 3.88 0 1 1 7.76 0zM12 10.94a2.76 2.76 0 1 1 0-5.52 2.76 2.76 0 0 1 0 5.52'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M3.03 18.49h11.94c2.83 0 4.25 0 5.12-.88s.88-2.3.88-5.12V7.75c0-2.83 0-4.25-.88-5.13-.87-.87-2.29-.87-5.12-.87H9.03c-2.83 0-4.25 0-5.12.87-.88.88-.88 2.3-.88 5.13z'
        stroke='currentColor'
      />
      <path
        d='M3.03 18.49c0 1.66 0 2.49.46 3.04l.26.26c.55.46 1.38.46 3.04.46h8.85c1.66 0 2.49 0 3.04-.46l.26-.26c.46-.55.46-1.38.46-3.04'
        stroke='currentColor'
      />
      <path d='M14.76 8.18a2.76 2.76 0 1 0-5.52 0 2.76 2.76 0 0 0 5.52 0' stroke='currentColor' />
      <path d='M8.12 14.82a3.88 3.88 0 1 1 7.76 0' stroke='currentColor' />
    </svg>
  )
}
