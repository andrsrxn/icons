import type { Icon } from './types'

export const IconIsland: Icon = ({
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
      data-slot='island'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.93 15.38a7.4 7.4 0 0 0-6.97 5.38h13.92c-.47-2.64-3.79-5.38-6.95-5.38'
        fill='currentColor'
      />
      <path
        d='M10.94 15.11s-.2-2.44.88-4.34c1.07-1.9 2.95-2.98 2.95-2.98'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M9.86 6.48a.75.75 0 1 0 .58 1.38l-.29-.69zm4.46 1.88a.75.75 0 1 0 .96-1.15l-.48.58zm-4.17-1.19.29.7.17-.07q.2-.07.51-.14c.43-.1.95-.17 1.42-.1l.12-.73.13-.74a5 5 0 0 0-2.66.29l-.26.1h-.01zm2.51-.34-.12.74a4 4 0 0 1 1.78.8l.96-1.16-.02-.01-.2-.14a6 6 0 0 0-2.27-.97z'
        fill='currentColor'
      />
      <path
        d='M14.55 7.09a.75.75 0 1 0 .5 1.41l-.25-.7zm4.52 1.93a.75.75 0 0 0 .95-1.16l-.47.58zM14.8 7.8l.24.71h.01l.19-.06.55-.12a5 5 0 0 1 1.52-.06l.12-.74.12-.74a6 6 0 0 0-2.72.22l-.25.08h-.02zm2.63-.27-.12.74a4 4 0 0 1 1.76.76l.48-.58.47-.58-.02-.01-.18-.14a6 6 0 0 0-2.27-.93z'
        fill='currentColor'
      />
      <path
        d='M15.27 7.24a.75.75 0 0 0-1 1.1l.5-.55zm.62 4.16a.75.75 0 0 0 1.5.03l-.75-.01zm-1.12-3.6-.5.55.13.12.34.37c.28.32.6.72.78 1.11l.68-.33.67-.33a7 7 0 0 0-1.58-2.04h-.01v-.01zm1.43 1.82-.68.33a4 4 0 0 1 .37 1.44v.01l.75.02.75.01v-.06a3 3 0 0 0-.05-.61q-.09-.6-.47-1.47z'
        fill='currentColor'
      />
      <path
        d='M15.48 7.85a.75.75 0 1 1-1.5-.12l.75.06zm-3-3.55a.75.75 0 0 1 .84-1.25l-.42.63zm2.25 3.49L14 7.73v-.18l-.01-.52a4 4 0 0 0-.32-1.34l.67-.33.68-.33a5.4 5.4 0 0 1 .48 2.54v.28zm-.4-2.43-.67.33a4 4 0 0 0-1.18-1.4l.42-.61.42-.63v.01h.02l.18.14A5.5 5.5 0 0 1 15 5.03z'
        fill='currentColor'
      />
      <path
        d='M3.96 20.41c.75-2.84 3.8-5.04 6.97-5.03s6.48 2.56 6.95 5.03'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
