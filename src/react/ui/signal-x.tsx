import type { Icon } from './types'

export const IconSignalX: Icon = ({
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
      data-slot='signal-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6.26 14.4 16.8 6.44c1.4-1.06 2.1-1.59 2.66-1.31.55.27.55 1.15.55 2.9V16c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3H7.47c-2.46 0-3.7 0-3.93-.68s.76-1.43 2.72-2.91'
        fill='currentColor'
      />
      <path
        d='m15.19 7.28.45.6zm-7.53 5.7.45.6zm11.59-.91a.75.75 0 1 0 1.5 0zm-5.38 7.05a.75.75 0 1 0 0-1.5zm5.3-13.81.33-.68zM3.59 17.35l.7-.24zm13.94-2.88a.75.75 0 1 0-1.06 1.06L17 15zm2.94 5.06a.75.75 0 0 0 1.06-1.06L21 19zm1.06-4a.75.75 0 0 0-1.06-1.06L21 15zm-5.06 2.94a.75.75 0 1 0 1.06 1.06L17 19zm-1.28-11.2-.45-.6-7.53 5.7.45.6.45.6 7.53-5.7zm4.81 4.8h.75v-2.4h-1.5v2.4zm-10.53 6.3v.75h4.4v-1.5h-4.4zm5.72-11.1.45.6c1.07-.8 1.8-1.36 2.37-1.67.58-.32.75-.26.82-.22l.34-.67.33-.68c-.76-.37-1.53-.12-2.2.25-.7.38-1.54 1.02-2.56 1.8zM20 9.68h.75c0-1.3 0-2.35-.11-3.12S20.26 5 19.5 4.63l-.33.68-.34.67c.08.03.23.14.32.78.1.65.1 1.57.1 2.9zm-12.34 3.3-.45-.6c-1.46 1.11-2.61 1.98-3.35 2.71-.69.68-1.31 1.53-.99 2.5l.72-.23.7-.24c0-.05-.07-.27.63-.96.65-.64 1.7-1.44 3.2-2.58zm1.81 5.4v-.75c-1.87 0-3.2 0-4.1-.12-.97-.13-1.06-.35-1.07-.4l-.71.25-.72.23c.33.98 1.34 1.28 2.3 1.4 1.03.14 2.48.14 4.3.14zM17 15l-.53.53 4 4L21 19l.53-.53-4-4zm4 0-.53-.53-4 4L17 19l.53.53 4-4z'
        fill='currentColor'
      />
    </svg>
  )
}
