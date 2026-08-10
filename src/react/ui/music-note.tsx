import type { Icon } from './types'

export const IconMusicNote: Icon = ({
  size = 24,
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
      data-slot='music-note'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M11.06 17.6c0 1.49-1.2 2.7-2.67 2.7a2.7 2.7 0 0 1-2.68-2.7 2.7 2.7 0 0 1 2.68-2.71 2.7 2.7 0 0 1 2.67 2.7m.01-11.06v1.16a1 1 0 0 0 1.24.97l5.07-1.28a1 1 0 0 0 .76-.97V5.25a1 1 0 0 0-1.25-.97l-5.07 1.28a1 1 0 0 0-.75.97'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M11.06 17.6V9.2m0 0v-.6c0-1.51 0-2.27.43-2.82s1.17-.72 2.64-1.07l3.12-.75c.39-.09.58-.13.73-.07q.13.05.22.17c.1.13.1.33.1.72 0 1.03 0 1.54-.21 1.96a2 2 0 0 1-.51.65c-.36.3-.86.42-1.85.67zm0 8.4c0 1.49-1.2 2.7-2.67 2.7a2.7 2.7 0 0 1-2.68-2.7 2.7 2.7 0 0 1 2.68-2.71 2.7 2.7 0 0 1 2.67 2.7Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
