import type { Icon } from './types'

export const IconKanban: Icon = ({
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
      data-slot='ui-icon-kanban'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='8.95'
        y='16.73'
        width='6.11'
        height='13.94'
        rx='2'
        transform='rotate(180 8.95 16.73)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='21.16'
        y='13.31'
        width='6.11'
        height='10.51'
        rx='2'
        transform='rotate(180 21.16 13.3)'
        fill='currentColor'
      />
      <path
        d='M8.95 18.15c0 .99 0 1.48.17 1.86a2 2 0 0 0 1.02 1.03c.39.17.88.17 1.86.17v0c.98 0 1.47 0 1.86-.17A2 2 0 0 0 14.88 20c.17-.38.17-.87.17-1.86V2.8h-6.1zm0-4.47c0 .98 0 1.47-.17 1.86a2 2 0 0 1-1.03 1.03c-.38.16-.87.16-1.86.16v0c-.98 0-1.47 0-1.85-.16A2 2 0 0 1 3 15.54c-.17-.39-.17-.88-.17-1.86V6.8c0-1.88 0-2.83.59-3.41C4 2.8 4.95 2.8 6.83 2.8h2.1z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21.16 10.25c0 .99 0 1.48-.17 1.86a2 2 0 0 1-1.03 1.03c-.38.17-.87.17-1.85.17v0c-.99 0-1.48 0-1.86-.17a2 2 0 0 1-1.03-1.03c-.17-.38-.17-.87-.17-1.86V2.8h2.1c1.9 0 2.84 0 3.42.59.59.58.59 1.53.59 3.41z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
