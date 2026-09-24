import type { Icon } from './types'

export const IconDatabaseIn: Icon = ({
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
      data-slot='icon-ui-database-in'
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
        d='M3.25 16.32c0-1.15 0-1.72.38-2.02.37-.3.93-.18 2.04.06l5.87 1.26c.25.05.37.08.5.07s.25-.04.5-.11l8.18-2.46v3.62l-.01.3a1 1 0 0 1-.27.56l-.24.2q-.17.11-.23.18a1 1 0 0 0-.27.56c-.02.07-.02.14-.02.3v.3c0 .6 0 .9-.15 1.14l-.05.07c-.18.23-.44.33-.97.52a21 21 0 0 1-6.47 1.36c-2.46 0-5.76-1.05-7.54-1.69-.59-.2-.88-.32-1.06-.57-.19-.26-.19-.59-.19-1.24z'
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
      <path d='M3.12 18.83c0 1.87 3.98 3.38 8.88 3.38a9 9 0 0 0 2.2-.24' stroke='currentColor' />
      <path d='M3.12 5.23v13.38' stroke='currentColor' />
      <path d='M20.88 5.23v6.73' stroke='currentColor' />
      <path
        d='M22.3 19.28c-1.17-1.17-1.75-1.75-2.46-1.82a2 2 0 0 0-.4 0c-.7.07-1.29.65-2.46 1.82'
        stroke='currentColor'
      />
      <path d='M19.64 22.65v-4.97' stroke='currentColor' />
    </svg>
  )
}
