import type { Icon } from './types'

export const IconTextIndent: Icon = ({
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
      data-slot='text-indent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M10.82 5.25a.75.75 0 0 0 0 1.5zM20 6.75a.75.75 0 0 0 0-1.5zm-16 4.5a.75.75 0 0 0 0 1.5zm16 1.5a.75.75 0 0 0 0-1.5zm-16 4.5a.75.75 0 0 0 0 1.5zm16 1.5a.75.75 0 0 0 0-1.5zM4.3 3.06a.75.75 0 1 0-.6 1.37l.3-.68zm.65 1.12.31-.69zm0 3.64.31.69zM3.7 7.57a.75.75 0 1 0 .62 1.37L4 8.25zM7.57 6h.75zm3.25 0v.75H20v-1.5h-9.18zM4 12v.75h16v-1.5H4zm0 6v.75h16v-1.5H4zM4 3.75l-.3.68.95.43.3-.68.31-.69-.95-.43zm.96 4.07-.31-.68-.96.43.31.68.3.69.96-.43zm0-3.64-.31.68c.89.4 1.48.67 1.86.91.4.25.3.32.3.23h1.51c0-.74-.53-1.2-1-1.5q-.77-.45-2.06-1zm0 3.64.3.69c.85-.39 1.56-.7 2.06-1.02.47-.3 1-.76 1-1.5h-1.5c0-.08.08-.01-.3.24-.39.24-.98.5-1.87.9z'
        fill='currentColor'
      />
    </svg>
  )
}
