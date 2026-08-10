import type { Icon } from './types'

export const IconUserStar: Icon = ({
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
      data-slot='user-star'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <g opacity='.2'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 13.07a7.6 7.6 0 0 0-7.41 6.48c-.07.55.38 1 .93 1h9.75a1 1 0 0 1-.05-.36 4 4 0 0 1 .23-.81.8.8 0 0 0-.24-.75l-.16-.12a4 4 0 0 1-.5-.4.8.8 0 0 1 .42-1.3l.64-.01h.2a.8.8 0 0 0 .64-.47l.06-.19c.12-.35.17-.52.22-.6.02-.04.53-.2.55-.23A7 7 0 0 0 12 13.07'
          fill='currentColor'
        />
        <path d='M16.54 8.26a4.54 4.54 0 1 1-9.08 0 4.54 4.54 0 0 1 9.08 0' fill='currentColor' />
      </g>
      <path
        d='M12 13.07a4.8 4.8 0 1 0 0-9.62 4.8 4.8 0 0 0 0 9.62Zm0 0a7.54 7.54 0 0 0-7.48 7.48M12 13.07q1.31 0 2.52.46m1.23 2.66-.12.02c-.88.12-1.31.19-1.4.48-.1.3.21.6.84 1.22l.09.09c.18.18.28.27.31.38.04.12.02.25-.02.5l-.02.12c-.15.87-.23 1.3.02 1.49.26.18.65-.03 1.43-.44l.1-.05c.23-.12.34-.18.47-.18s.23.06.46.18l.1.05c.79.41 1.18.62 1.43.44.25-.19.18-.62.03-1.5l-.02-.1c-.04-.26-.07-.39-.03-.5.04-.12.13-.21.32-.4l.08-.08c.63-.61.95-.92.85-1.22s-.53-.36-1.4-.48l-.12-.02c-.26-.04-.38-.05-.48-.13s-.16-.19-.27-.42l-.06-.1c-.39-.8-.58-1.19-.9-1.19-.3 0-.5.4-.89 1.19l-.05.1c-.12.23-.17.35-.27.42s-.23.1-.48.13Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
