import type { Icon } from './types'

export const IconTrash: Icon = ({
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
      data-slot='trash'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.85 20.07h-6.3a1 1 0 0 1-.99-.82L5.47 7.85a1 1 0 0 1 .99-1.18h10.56A1 1 0 0 1 18 7.86l-2.16 11.4a1 1 0 0 1-.99.8'
        fill='currentColor'
      />
      <path
        d='M5.46 6.52v-.75h-.88l.14.87zm12.8 0 .75.12.13-.87h-.87zM11.02 20.4v-.75zM7.06 17l.74-.11zm9.57.02.74.11zm-3.95 3.38v.75zM4.13 5.77a.75.75 0 1 0 0 1.5zm15.74 1.5a.75.75 0 0 0 0-1.5zM9.56 15.6a.75.75 0 0 0 1.5 0zm1.5-4.8a.75.75 0 1 0-1.5 0zm1.6 4.8a.75.75 0 0 0 1.5 0zm1.5-4.8a.75.75 0 1 0-1.5 0zm-8.7-4.28v.75h12.8v-1.5H5.47zm12.8 0-.74-.11L15.9 16.9l.74.12.74.11 1.64-10.5zM12.69 20.4v-.75H11v1.5h1.67zM7.06 17l.74-.11L6.2 6.41l-.74.11-.74.12 1.6 10.48zM11 20.4v-.75c-.84 0-1.4 0-1.82-.05-.4-.06-.58-.14-.71-.25l-.49.57-.49.57c.44.37.94.52 1.5.6q.81.07 2.01.06zM7.06 17l-.74.12q.16 1.19.36 1.97c.16.54.39 1.02.82 1.4l.49-.57.49-.57c-.13-.11-.24-.28-.35-.67-.12-.4-.2-.96-.33-1.79zm9.57.02-.74-.12c-.13.83-.22 1.38-.33 1.79-.12.38-.23.55-.36.66l.5.57.48.57c.43-.37.66-.85.82-1.39q.2-.78.37-1.97zm-3.95 3.38v.75q1.2.02 2-.07a2.7 2.7 0 0 0 1.5-.6l-.49-.56-.49-.57c-.12.1-.3.2-.7.25-.43.05-.99.05-1.82.05zM4.13 6.52v.75h4.41v-1.5H4.13zm4.41 0h.75V5.6H7.8v.92zm2-2.92v.75h2.63v-1.5h-2.63zm-2 2.92v.75h6.63v-1.5H8.54zm6.63 0v.75h4.7v-1.5h-4.7zm0-.92h-.75v.92h1.5V5.6zm-2-2v.75c.69 0 1.25.56 1.25 1.25h1.5a2.75 2.75 0 0 0-2.75-2.75zm-4.63 2h.75c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.8 5.6zm1.77 10h.75v-4.8h-1.5v4.8zm3.1 0h.76v-4.8h-1.5v4.8z'
        fill='currentColor'
      />
    </svg>
  )
}
