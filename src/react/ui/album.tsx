import type { Icon } from './types'

export const IconAlbum: Icon = ({
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
      data-slot='ui-icon-album'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.17 2.65c1.2 0 2.18.97 2.18 2.18v10.52c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88h-6.7c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V6.83c0-1.1 0-1.64.14-2.09A3 3 0 0 1 4.74 2.8c.45-.14 1-.14 2.09-.14H8.2a2.8 2.8 0 0 1 2.8 2.8V8.4a1.35 1.35 0 0 0 2.17 1.07 1.35 1.35 0 0 1 1.66 0c.88.69 2.17.06 2.17-1.07V4.83c0-1.2.97-2.18 2.17-2.18'
        fill='currentColor'
      />
      <rect
        width='18.7'
        height='18.7'
        rx='3'
        transform='scale(1 -1)rotate(90 21.35 0)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.8 2.65v6.17c0 .94 0 1.41.29 1.55.29.13.64-.18 1.36-.79l1.04-.9c.33-.27.49-.41.68-.4s.35.14.66.44l.73.68c.72.69 1.08 1.03 1.38.9s.3-.63.3-1.62V2.65'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
