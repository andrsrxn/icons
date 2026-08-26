import type { Icon } from './types'

export const IconFolderOpen: Icon = ({
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
      data-slot='ui-icon-folder-open'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M19.5 8.75c.18.38.26.58.28.73a1 1 0 0 1-.69 1.07c-.15.05-.36.05-.78.05H7.14c-.61 0-.92 0-1.16.15-.25.16-.38.43-.64.99L2.7 17.29l.34-10.24c.03-.82.04-1.23.3-1.5.24-.27.65-.32 1.46-.42L5.88 5h2.08c.36 0 .54 0 .7.06.17.06.31.18.59.41l2.14 1.82c.26.22.4.33.55.39s.33.07.67.08l5.75.22q.26 0 .36.03a1 1 0 0 1 .62.42q.07.08.16.32'
        fill='currentColor'
      />
      <path
        d='M11.51 18.96H8.7c-2.83 0-4.25 0-5.13-.87-.87-.88-.87-2.3-.87-5.13V7.31c0-1.21.98-2.2 2.2-2.2h1.9c.73 0 1.09 0 1.43.08a3 3 0 0 1 .77.3c.3.17.57.42 1.11.91s.8.74 1.11.91a3 3 0 0 0 .77.3c.34.08.7.08 1.43.08h4.1a2.8 2.8 0 0 1 2.81 2.82'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M20.44 16.44c-.49 1.22-.73 1.83-1.24 2.18-.5.34-1.16.34-2.48.34H8.4c-2.59 0-3.89 0-4.48-.85s-.16-2.07.72-4.5l.15-.42c.46-1.28.7-1.92 1.21-2.28.52-.36 1.2-.36 2.56-.36h8.34c2.67 0 4 0 4.6.87.6.88.1 2.12-.89 4.6z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
