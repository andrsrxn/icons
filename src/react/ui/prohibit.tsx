import type { Icon } from './types'

export const IconProhibit: Icon = ({
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
      data-slot='prohibit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M20.18 12a8.18 8.18 0 1 1-16.36 0 8.18 8.18 0 0 1 16.36 0'
        fill='currentColor'
      />
      <path
        d='M19.49 20.55a.75.75 0 0 0 1.06-1.06l-.53.53zM4.5 3.45a.75.75 0 0 0-1.06 1.06l.53-.53zM20.18 12h-.75c0 4.1-3.33 7.43-7.43 7.43v1.5c4.93 0 8.93-4 8.93-8.93zM12 20.18v-.75A7.43 7.43 0 0 1 4.57 12h-1.5c0 4.93 4 8.93 8.93 8.93zM3.82 12h.75c0-4.1 3.33-7.43 7.43-7.43v-1.5c-4.93 0-8.93 4-8.93 8.93zM12 3.82v.75c4.1 0 7.43 3.33 7.43 7.43h1.5c0-4.93-4-8.93-8.93-8.93zm8.02 16.2.53-.53L4.5 3.45l-.53.53-.53.53L19.5 20.55z'
        fill='currentColor'
      />
    </svg>
  )
}
