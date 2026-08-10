import type { Icon } from './types'

export const IconWarehouse: Icon = ({
  size = 24,
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
      data-slot='warehouse'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.21 9.04C4 9.47 4 9.96 4 10.95v5.31c0 1.89 0 2.83.59 3.42q.27.29.47.4c.3.18.72.18 1.98.18V10.4H17l.07 9.87c1.24 0 1.6 0 1.88-.16.14-.09.26-.22.46-.42.59-.59.59-1.53.59-3.42v-5.3c0-1 0-1.5-.21-1.92-.22-.42-.61-.72-1.4-1.3l-4-2.97C13.22 3.92 12.65 3.5 12 3.5s-1.23.42-2.38 1.27l-4 2.97c-.8.58-1.2.88-1.4 1.3'
        fill='currentColor'
      />
      <path
        d='M4 10.95c0-.99 0-1.48.21-1.9.22-.43.62-.73 1.41-1.31l4-2.97C10.77 3.92 11.34 3.5 12 3.5s1.23.42 2.38 1.27l4 2.97c.8.58 1.2.88 1.4 1.3.22.43.22.92.22 1.91v5.31c0 1.89 0 2.83-.59 3.42-.58.58-1.52.58-3.41.58H8c-1.89 0-2.83 0-3.41-.58C4 19.09 4 18.15 4 16.26z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M17 20v-6c0-1.89 0-2.83-.59-3.41C15.83 10 14.9 10 13 10h-2c-1.89 0-2.83 0-3.41.59C7 11.17 7 12.1 7 14v6'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path d='M7 13.54h10M7 17h10' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}
