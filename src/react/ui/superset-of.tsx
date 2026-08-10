import type { Icon } from './types'

export const IconSupersetOf: Icon = ({
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
      data-slot='superset-of'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M6 4.25a.75.75 0 1 0 0 1.5zm7.18.75v-.75zm2.86 10.04-.4-.64zm-.2.12-.39-.64zm-2.93.84v.75zM6 15.25a.75.75 0 0 0 0 1.5zm9.68-9.64.34-.67zm2.62 14.23a.75.75 0 0 0 0-1.5zm-12.6-1.5a.75.75 0 0 0 0 1.5zM6 5v.75h7.18v-1.5H6zm10.04 10.04-.4-.64-.19.12.4.64.4.64.2-.12zm-3.13.96v-.75H6v1.5h6.91zm2.94-.84-.4-.64c-.76.48-1.64.73-2.54.73v1.5c1.18 0 2.33-.33 3.34-.95zM13.18 5v.75q1.13 0 2.15.53l.35-.67.34-.67a6 6 0 0 0-2.84-.69zm2.5.6-.35.68a4.68 4.68 0 0 1 .32 8.12l.4.64.39.64a6.18 6.18 0 0 0-.42-10.74zm2.62 13.5v-.76H5.7v1.5h12.6z'
        fill='currentColor'
      />
    </svg>
  )
}
