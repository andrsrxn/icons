import type { Icon } from './types'

export const IconArrowsDiagonalRight: Icon = ({
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
      data-slot='arrows-diagonal-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M20.56 13.01a.75.75 0 1 0-1.5 0zm-.75 2.8h-.75zm-4 4v.75zm-2.8-.75a.75.75 0 0 0 0 1.5zm6.22.16.53.53zM10.99 4.94a.75.75 0 1 0 0-1.5zm-2.8-.75v.75zm-4 4h-.75zm-.75 2.8a.75.75 0 0 0 1.5 0zm1.34-6.22-.53-.53zm.53-.53A.75.75 0 1 0 4.25 5.3l.53-.53zm14.5 8.77h-.75v2.8h1.5V13zm-4 6.8v-.75H13v1.5h2.8zm4-4h-.75c0 .96 0 1.6-.07 2.1-.06.45-.16.65-.3.78l.54.53.53.53a2.7 2.7 0 0 0 .72-1.65q.1-.9.08-2.3zm-4 4v.75q1.38.02 2.3-.08c.62-.09 1.2-.27 1.65-.73l-.53-.53-.53-.53c-.14.13-.33.24-.8.3-.48.07-1.13.07-2.1.07zM10.99 4.19v-.75H8.2v1.5H11zm-6.8 4h-.75v2.8h1.5v-2.8zm4-4v-.75c-.91 0-1.68 0-2.29.08-.63.08-1.2.26-1.65.72l.53.53.53.53c.13-.13.33-.24.8-.3s1.12-.06 2.09-.06zm-4 4h.75c0-.97 0-1.62.07-2.1.06-.46.17-.66.3-.79l-.53-.53-.53-.53a2.7 2.7 0 0 0-.73 1.65c-.08.6-.08 1.38-.08 2.3zm.59-3.42-.53.53L18.7 19.75l.53-.53.53-.53L5.3 4.24z'
        fill='currentColor'
      />
    </svg>
  )
}
