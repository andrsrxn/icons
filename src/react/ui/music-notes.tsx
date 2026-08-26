import type { Icon } from './types'

export const IconMusicNotes: Icon = ({
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
      data-slot='ui-icon-music-notes'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='3.85'
        height='11.55'
        rx='1'
        transform='scale(-1 1)rotate(-72.37 -5.84 17.27)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M8.77 18.95a2.65 2.65 0 1 1-5.3 0 2.65 2.65 0 0 1 5.3 0m11.64-1.73a2.65 2.65 0 1 1-5.29 0 2.65 2.65 0 0 1 5.3 0'
        fill='currentColor'
      />
      <path
        d='M8.77 18.95a2.64 2.64 0 0 1-2.65 2.64 2.65 2.65 0 1 1 2.65-2.64m11.64-1.73a2.64 2.64 0 0 1-2.64 2.65 2.65 2.65 0 1 1 2.64-2.65'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M20.41 17.33V7.32c0-2.57 0-3.85-.84-4.45s-2.06-.18-4.48.67l-2.3.8c-1.95.69-2.92 1.03-3.47 1.8-.55.79-.55 1.82-.55 3.87v8.76m0-8.45 11.3-4.15'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
