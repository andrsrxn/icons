import type { Icon } from './types'

export const IconArrowULeft: Icon = ({
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
      data-slot='arrow-u-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M6.12 13.14a.75.75 0 1 0 1.06-1.06l-.53.53zm-.3-1.36.53-.53zm0-5.66.52.53zm1.36-.3a.75.75 0 1 0-1.06-1.07l.53.53zM3.8 8.2a.75.75 0 1 0 0 1.5zm2.24 8.72a.75.75 0 0 0 0 1.5zm.6-4.31.53-.53-.83-.83-.53.53-.53.53.83.83zM5.8 6.12l.53.53.84-.84-.53-.53-.53-.53-.84.84zm0 5.66.54-.53A18 18 0 0 1 4.9 9.72c-.28-.37-.35-.59-.35-.77h-1.5c0 .65.27 1.18.66 1.68q.57.72 1.57 1.68zm0-5.66-.53-.53c-.65.65-1.2 1.2-1.56 1.68a2.7 2.7 0 0 0-.66 1.68h1.5c0-.18.07-.4.35-.77.3-.39.75-.85 1.43-1.53zm-2 2.83v.75h12.3V8.2H3.8zm12.29 8.72v-.75H6.05v1.5H16.1zm4.36-4.36h-.75c0 2-1.62 3.61-3.61 3.61v1.5a5.1 5.1 0 0 0 5.1-5.11zM16.1 8.95v.75c2 0 3.6 1.61 3.6 3.61h1.51A5.1 5.1 0 0 0 16.1 8.2z'
        fill='currentColor'
      />
    </svg>
  )
}
