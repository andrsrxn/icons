import type { Icon } from './types'

export const IconFolderLock: Icon = ({
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
      data-slot='ui-icon-folder-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.64 13.67q-.27.2-.46.46l-.34.48a6 6 0 0 0-1.03 1.73 3 3 0 0 0-.1.52c-.06.49.05.99.27 1.99l.13.6H8.7c-2.83 0-4.25 0-5.13-.88s-.87-2.29-.87-5.12V7.27a3 3 0 0 1 2.71-2.7c.14-.02.31-.02.65-.02h.75c1.1 0 1.64 0 2.14.18.5.19.92.54 1.75 1.25l.05.04c.83.7 1.24 1.06 1.75 1.25.5.18 1.04.18 2.14.18h.66c2.83 0 4.25 0 5.13.88s.87 2.3.87 5.12v1.67l-1.15-1.2c-.66-.7-1.73-.8-2.5-.25'
        fill='currentColor'
      />
      <path
        d='M21.3 10.66v-.43a3 3 0 0 0-2.8-2.8h-4.48c-.83 0-1.25 0-1.64-.12a3 3 0 0 1-.59-.23 6 6 0 0 1-1.27-1.04c-.61-.56-.92-.85-1.28-1.03a3 3 0 0 0-.59-.24c-.39-.1-.8-.1-1.64-.1H5.02A2.33 2.33 0 0 0 2.7 6.99v6.46c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88h4.11'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='15.85'
        y='15.35'
        width='5.93'
        height='4.43'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m20.49 15.35-.15-1.24a1.51 1.51 0 0 0-3-.02l-.16 1.26'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
