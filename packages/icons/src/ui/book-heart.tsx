import type { Icon } from './types'

export const IconBookHeart: Icon = ({
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
      data-slot='icon-ui-book-heart'
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
        d='M20.98 5.74c0-1.89 0-2.83-.59-3.42-.58-.58-1.53-.58-3.41-.58H7.02c-1.88 0-2.83 0-3.41.58-.59.6-.59 1.53-.59 3.42v8.75c0 1.89 0 2.83.59 3.42.58.58 1.53.58 3.41.58h9.96c1.88 0 2.83 0 3.41-.58.59-.59.59-1.53.59-3.42zm-10.9 1.4h3.84c1.22 0 2.14 1.4 1.74 2.88-.25.96-1.34 1.8-2.32 2.57-.75.58-1.93.58-2.68 0-.98-.76-2.07-1.6-2.32-2.57-.4-1.48.52-2.87 1.74-2.87'
        fill='currentColor'
      />
      <path
        d='M3.02 7.74c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h5.96c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v4.75c0 2.83 0 4.25-.88 5.12s-2.3.88-5.12.88H3.02z'
        stroke='currentColor'
      />
      <path
        d='M3.02 18.5c0 1.65 0 2.48.46 3.04l.26.26c.56.46 1.39.46 3.05.46h8.85c1.66 0 2.5 0 3.05-.46l.26-.26c.46-.56.46-1.39.46-3.05'
        stroke='currentColor'
      />
      <path
        d='M14.13 6.77c-1.09 0-1.87.82-2.13 1.23a2.7 2.7 0 0 0-2.13-1.23c-1.37 0-2.39 1.56-1.95 3.2s3.04 2.98 4.08 4.15c1.04-1.17 3.64-2.5 4.08-4.15.44-1.64-.58-3.2-1.95-3.2'
        stroke='currentColor'
      />
    </svg>
  )
}
