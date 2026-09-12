import type { Icon } from './types'

export const IconBook: Icon = ({
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
      data-slot='icon-ui-book'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.02 5.74c0-1.89 0-2.83.59-3.42.58-.58 1.52-.58 3.41-.58h9.96c1.89 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v8.75c0 1.89 0 2.83-.59 3.42-.58.58-1.52.58-3.41.58H3.02z'
        fill='currentColor'
      />
      <path
        d='M3.02 7.74c0-2.83 0-4.25.88-5.12s2.3-.88 5.12-.88h5.96c2.83 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12v4.75c0 2.83 0 4.25-.88 5.13s-2.3.87-5.12.87H3.02z'
        stroke='currentColor'
      />
      <path
        d='M3.02 18.5c0 1.66 0 2.49.46 3.04l.26.26c.56.46 1.39.46 3.05.46h8.85c1.66 0 2.5 0 3.05-.46l.26-.26c.46-.55.46-1.38.46-3.05'
        stroke='currentColor'
      />
      <path d='M7.42 2.18v7.35' stroke='currentColor' />
    </svg>
  )
}
