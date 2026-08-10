import type { Icon } from './types'

export const IconArrowsTriangle: Icon = ({
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
      data-slot='arrows-triangle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m12.67 8.5 1.74.66c.86.33 1.3.5 1.67.33m1.52-3.21-.66 1.74c-.33.87-.49 1.3-.86 1.47m0 0-2.06-3.47c-.81-1.4-1.22-2.1-1.83-2.1-.6 0-1.01.7-1.82 2.1L8.32 9.56m-4.84 3 1.8-.5c.9-.25 1.34-.37 1.7-.17s.47.65.72 1.54l.5 1.8m-1.23-3.34L4.9 15.51c-.82 1.4-1.22 2.11-.92 2.64s1.12.53 2.74.53h3.52m5.05-2.71-1.31 1.31c-.66.66-.99.99-.99 1.4m2.3 2.7-1.31-1.31c-.66-.66-.99-.99-.99-1.4m0 0h4.7c1.62 0 2.43 0 2.74-.52.3-.53-.1-1.23-.92-2.64l-2.22-3.62'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
