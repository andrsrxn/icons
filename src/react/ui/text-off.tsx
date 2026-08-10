import type { Icon } from './types'

export const IconTextOff: Icon = ({
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
      data-slot='text-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m17.1 4 .04-.75zm1.15 2.13a.75.75 0 0 0 1.5 0zM19 5.9l.75-.04zM7 4l-.04-.75zm5.8 0a.75.75 0 0 0-1.5 0zM9.85 19.25a.75.75 0 0 0 0 1.5zm4.4 1.5a.75.75 0 0 0 0-1.5zm5.24-.2a.75.75 0 1 0 1.06-1.06l-.53.53zM4.5 3.45a.75.75 0 0 0-1.06 1.06l.53-.53zM7.24 4v.75h9.63v-1.5H7.24zm9.63 0v.75h.2L17.1 4l.04-.75h-.27zM19 6.13h.75v-.27L19 5.9l-.75.03v.2zM17.1 4l-.03.75c.63.04 1.14.55 1.18 1.18L19 5.9l.75-.04a2.75 2.75 0 0 0-2.6-2.6zM7.24 4v-.75h-.28L7 4l.04.75h.2zm4.81 0h-.75v16h1.5V4zm0 16v-.75h-2.2v1.5h2.2zm0 0v.75h2.2v-1.5h-2.2zm7.97.02.53-.53L5.78 4.72l-.53.53-.53.53 14.77 14.77zM5.25 5.25l.53-.53L4.5 3.45l-.53.53-.53.53 1.27 1.27zm0 0 .7.28c.17-.44.6-.75 1.09-.78L7 4l-.04-.75c-1.1.06-2.02.75-2.4 1.72z'
        fill='currentColor'
      />
    </svg>
  )
}
