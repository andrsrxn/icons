import type { Icon } from './types'

export const IconTable: Icon = ({
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
      data-slot='ui-icon-table'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.56 2.76c1.57 0 2.35 0 2.96.29a3 3 0 0 1 1.43 1.43c.3.6.3 1.4.3 2.96 0 .52 0 .78-.1.99a1 1 0 0 1-.48.47c-.2.1-.47.1-.99.1H4.32c-.52 0-.78 0-.99-.1a1 1 0 0 1-.48-.47c-.1-.2-.1-.47-.1-.99 0-1.57 0-2.35.3-2.96a3 3 0 0 1 1.43-1.43c.6-.3 1.4-.3 2.96-.3z'
        fill='currentColor'
      />
      <rect
        width='18.48'
        height='18.48'
        rx='3'
        transform='scale(1 -1)rotate(90 21.24 0)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21 9H3m18 4.12H3m18 4H3M12 9v12.24'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
