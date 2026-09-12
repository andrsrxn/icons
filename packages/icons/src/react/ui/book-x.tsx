import type { Icon } from './types'

export const IconBookX: Icon = ({
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
      data-slot='icon-ui-book-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.03 5.75c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58h9.94c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v8.74c0 1.88 0 2.83-.58 3.41-.59.59-1.53.59-3.42.59H3.03z'
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
      <path d='m9 7.08 6.07 6.08' stroke='currentColor' />
      <path d='m8.99 13.16 6.08-6.08' stroke='currentColor' />
    </svg>
  )
}
