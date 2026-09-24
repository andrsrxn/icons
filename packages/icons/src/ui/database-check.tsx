import type { Icon } from './types'

export const IconDatabaseCheck: Icon = ({
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
      data-slot='icon-ui-database-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <ellipse
        opacity='.2'
        cx='12'
        cy='5.23'
        rx='8.88'
        ry='3.44'
        transform='rotate(-180 12 5.23)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M3.25 16.32c0-1.15 0-1.72.38-2.02.37-.3.93-.18 2.04.06l5.87 1.26c.25.05.37.08.5.07s.25-.04.5-.11l8.18-2.46v5.64c0 .48 0 .72-.1.93-.1.2-.3.35-.67.65l-1.4 1.1c-.27.2-.4.3-.54.36a1 1 0 0 1-.39.06c-.15-.01-.31-.07-.62-.18-.18-.06-.27-.1-.36-.11l-.23-.01q-.12 0-.38.07c-1.34.34-2.77.6-3.99.6-2.46 0-5.76-1.05-7.54-1.69-.59-.2-.88-.32-1.06-.57-.19-.26-.19-.59-.19-1.24z'
        fill='currentColor'
      />
      <ellipse
        cx='12'
        cy='5.23'
        rx='8.88'
        ry='3.44'
        transform='rotate(-180 12 5.23)'
        stroke='currentColor'
      />
      <path d='M3.12 11.95c0 1.87 3.98 3.38 8.88 3.38s8.88-1.51 8.88-3.38' stroke='currentColor' />
      <path d='M6.06 11.3c.4.26 1.15.59 2.2.8 1.17.22 1.74.25 2.67.25' stroke='currentColor' />
      <path d='M6.06 17.66c.4.25 1.15.58 2.2.79 1.17.23 1.74.26 2.67.26' stroke='currentColor' />
      <path d='M3.12 18.83c0 1.87 3.98 3.38 8.88 3.38' stroke='currentColor' />
      <path d='M3.12 5.23v13.38' stroke='currentColor' />
      <path d='M20.88 5.23v6.73' stroke='currentColor' />
      <path
        d='m15.67 20.22.51.65c.73.9 1.09 1.36 1.57 1.36.49 0 .85-.46 1.57-1.37l2.84-3.6'
        stroke='currentColor'
      />
    </svg>
  )
}
