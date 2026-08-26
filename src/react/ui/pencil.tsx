import type { Icon } from './types'

export const IconPencil: Icon = ({
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
      data-slot='ui-icon-pencil'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='5.23'
        height='5.86'
        rx='1'
        transform='scale(1 -1)rotate(45 21.1 17.2)'
        fill='currentColor'
      />
      <path
        d='M4.98 21.26c.82 0 1.23 0 1.6-.15.36-.15.65-.44 1.23-1.02L20.23 7.67a5 5 0 0 0 .92-1.05 2 2 0 0 0 0-1.84 5 5 0 0 0-.92-1.05 5 5 0 0 0-1.05-.92 2 2 0 0 0-1.84 0 5 5 0 0 0-1.05.92L3.87 16.15c-.58.58-.87.87-1.02 1.24-.15.36-.15.77-.15 1.59v.28c0 .95 0 1.42.29 1.71.3.3.76.3 1.7.3zM18.4 9.08l-3.12-3.12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
