import type { Icon } from './types'

export const IconFileHeart: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-file-heart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M8.53 21.3c-1.88 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42V6.65c0-1.86 0-2.8.58-3.38s1.51-.6 3.38-.62l1.69-.01c1.02-.01 1.53-.02 1.93.16a2 2 0 0 1 1 1c.18.39.18.9.18 1.92 0 1.01 0 1.52.18 1.91a2 2 0 0 0 1 1c.4.18.9.18 1.92.18 1.03 0 1.55 0 1.95.18a2 2 0 0 1 .96.95c.2.4.2.9.22 1.93l.06 3.6-1.25.16a4 4 0 0 1-.8.05 4 4 0 0 1-.65-.15l-1.04-.29a1.47 1.47 0 0 0-1.85 1.66l.19 1.13c.08.52.12.79.23 1.03a2 2 0 0 0 .26.43c.17.2.38.36.81.68l1.53 1.13z'
        fill='currentColor'
      />
      <path
        d='M19.47 11.98V10.6c0-1.25 0-1.87-.24-2.43s-.68-1-1.58-1.87l-.91-.89-.97-.97c-.87-.87-1.3-1.3-1.86-1.53-.55-.22-1.16-.22-2.38-.22h-1c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v6.6c0 2.83 0 4.25.88 5.13s2.3.87 5.12.87h1.26'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.11 3.16v1.89c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58H19m.76 5.99c-1.03 0-1.78.77-2.02 1.16a2.6 2.6 0 0 0-2.02-1.16c-1.3 0-2.27 1.47-1.85 3.03s2.89 2.82 3.87 3.93c.98-1.11 3.45-2.38 3.86-3.93.42-1.56-.55-3.03-1.84-3.03'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
