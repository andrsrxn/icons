import type { Icon } from './types'

export const IconHdmiPort: Icon = ({
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
      data-slot='hdmi-port'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.62 11.07c0-1.88 0-2.83.59-3.41s1.53-.59 3.41-.59h8.76c1.88 0 2.82 0 3.41.59.59.58.59 1.53.59 3.41v1.1c0 .5 0 .76-.06.99a2 2 0 0 1-.87 1.22c-.2.13-.43.21-.91.38l-.34.12a2 2 0 0 0-1.08.97 1.9 1.9 0 0 1-1.7 1.08h-7.1a1.6 1.6 0 0 1-1.5-1.04 1.6 1.6 0 0 0-1.07-.97l-.38-.1-.53-.17a2 2 0 0 1-1.2-1.59c-.02-.12-.02-.27-.02-.55z'
        fill='currentColor'
      />
      <path
        d='M3.62 10.88c0-1.7 0-2.55.49-3.11l.21-.22c.56-.48 1.41-.48 3.1-.48h9.15c1.7 0 2.55 0 3.1.48l.22.22c.49.56.49 1.4.49 3.1v2.06c0 .97-.79 1.75-1.75 1.75-.66 0-1.26.36-1.56.94l-.09.18-.04.09a2 2 0 0 1-1.71 1.03H8.5a2 2 0 0 1-1.47-.84q-.07-.07-.18-.28l-.2-.32c-.3-.5-.82-.8-1.4-.8-.9 0-1.64-.73-1.64-1.64z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path d='M6.68 10.5h10.64' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}
