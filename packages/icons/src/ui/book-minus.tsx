import type { Icon } from './types'

export const IconBookMinus: Icon = ({
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
      data-slot='icon-ui-book-minus'
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
        d='M3.05 5.77c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58h9.9c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v8.7c0 1.9 0 2.83-.58 3.42-.59.59-1.53.59-3.42.59h-9.9c-1.89 0-2.83 0-3.42-.6-.58-.58-.58-1.52-.58-3.4z'
        fill='currentColor'
      />
      <path
        d='M3.05 7.77c0-2.83 0-4.25.87-5.12.88-.88 2.3-.88 5.13-.88h5.9c2.83 0 4.25 0 5.13.88.87.87.87 2.29.87 5.12v4.7c0 2.83 0 4.25-.87 5.13-.88.88-2.3.88-5.13.88H3.05z'
        stroke='currentColor'
      />
      <path
        d='M3.05 18.48c0 1.65 0 2.47.45 3.03l.27.27c.56.45 1.38.45 3.03.45h8.83c1.65 0 2.48 0 3.03-.45l.27-.27c.46-.56.46-1.38.46-3.03'
        stroke='currentColor'
      />
      <path d='M8.1 10.12h7.86' stroke='currentColor' />
    </svg>
  )
}
