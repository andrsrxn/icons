import type { Icon } from './types'

export const IconLink: Icon = ({
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
      data-slot='link'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12.77 5.08a4.35 4.35 0 0 1 6.15 6.15l-7.69 7.7a4.35 4.35 0 0 1-6.15-6.16z'
        fill='currentColor'
      />
      <path
        d='m18.92 11.23-.53-.53zm-2.83 1.78a.75.75 0 0 0 1.06 1.06l-.53-.53zm-2.02 4.14A.75.75 0 1 0 13 16.09l.53.53zm-2.84 1.77.53.53zm-6.15-6.15-.53-.53zm2.83-1.78a.75.75 0 0 0-1.06-1.06l.53.53zm2.02-4.14A.75.75 0 1 0 11 7.91l-.53-.53zm2.84-1.77-.53-.53zm2.84 4.37a.75.75 0 1 0-1.06-1.06l.53.53zm-7.22 5.1a.75.75 0 0 0 1.06 1.06l-.53-.53zm10.53-3.32-.53-.53-2.3 2.3.53.54.53.53 2.3-2.3zm-5.38 5.39-.53-.53-2.31 2.3.53.53.53.53 2.3-2.3zm-8.46-3.85.53.53L7.9 11l-.53-.54-.53-.53-2.3 2.3zm5.38-5.39.53.53 2.31-2.3-.53-.53-.53-.53-2.3 2.3zM5.08 18.92l.53-.53a3.6 3.6 0 0 1 0-5.09l-.53-.53-.53-.53c-2 2-2 5.22 0 7.21zm0 0-.53.53c1.99 2 5.22 2 7.21 0l-.53-.53-.53-.53a3.6 3.6 0 0 1-5.1 0zM18.92 5.08l-.53.53a3.6 3.6 0 0 1 0 5.09l.53.53.53.53c2-2 2-5.22 0-7.21zm0 0 .53-.53c-1.99-2-5.22-2-7.21 0l.53.53.53.53a3.6 3.6 0 0 1 5.1 0zm-3.84 3.84-.53-.53-6.16 6.16.53.53.53.53 6.16-6.16z'
        fill='currentColor'
      />
    </svg>
  )
}
