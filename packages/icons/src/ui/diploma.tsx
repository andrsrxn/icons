import type { Icon } from './types'

export const IconDiploma: Icon = ({
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
      data-slot='icon-ui-diploma'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.3 2.87c2.82 0 4.24 0 5.11.88s.88 2.29.88 5.12v2.41c0 2.83 0 4.24-.88 5.12-.87.88-2.29.88-5.12.88H14a2.83 2.83 0 1 0-3.63 0H7.71c-2.83 0-4.25 0-5.12-.88s-.88-2.3-.88-5.12V8.87c0-2.83 0-4.24.88-5.12.87-.88 2.29-.88 5.12-.88z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m9.84 19.77.4-1.32c.1-.35.15-.52.28-.62s.31-.1.67-.1h1.82c.36 0 .55 0 .68.1.14.1.18.28.28.64l.37 1.34c.23.82.34 1.24.12 1.44s-.63.06-1.43-.24l-.62-.23q-.24-.1-.35-.1c-.09 0-.17.04-.34.1l-.57.21c-.82.3-1.23.46-1.46.25s-.1-.63.15-1.47'
        fill='currentColor'
      />
      <path d='M9 6.16h6' stroke='currentColor' />
      <path d='M6.72 9.21h10.56' stroke='currentColor' />
      <path
        d='M6.25 17.28c-1.44 0-2.16 0-2.72-.24a3 3 0 0 1-1.58-1.58c-.24-.57-.24-1.28-.24-2.72V8.87c0-2.83 0-4.24.88-5.12.87-.88 2.29-.88 5.12-.88h8.58c2.83 0 4.25 0 5.12.88s.88 2.29.88 5.12v3.83c0 1.47 0 2.21-.25 2.79a3 3 0 0 1-1.54 1.54c-.58.25-1.31.25-2.8.25'
        stroke='currentColor'
      />
      <path
        d='m14.19 18.2.47 1.95c.19.76.28 1.14.06 1.34-.2.2-.58.08-1.33-.15l-.92-.3a1 1 0 0 0-.3-.06q-.09 0-.3.07l-.91.29c-.75.23-1.12.35-1.34.15s-.12-.58.07-1.34l.47-1.96'
        stroke='currentColor'
      />
      <path
        d='M15.13 15.23a2.95 2.95 0 0 0-2.96-2.96 2.96 2.96 0 1 0 2.96 2.96'
        stroke='currentColor'
      />
    </svg>
  )
}
