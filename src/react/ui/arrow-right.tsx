import type { Icon } from './types'

export const IconArrowRight: Icon = ({
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
      data-slot='arrow-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M13.29 17.9a.75.75 0 0 0 1.06 1.07l-.53-.53zm4.14-3.06.53.53zm0-5.66-.53.53zm-3.08-4.15a.75.75 0 0 0-1.06 1.07l.53-.54zm5.08 6.98h.75zm0 .74a.75.75 0 0 0 0-1.5zm-15.02-1.5a.75.75 0 0 0 0 1.5zm9.4 7.19.54.53 3.6-3.6-.52-.53-.53-.54-3.61 3.6zm3.62-9.26.53-.54-3.61-3.6-.53.52-.53.54 3.6 3.6zm0 5.66.53.53c.65-.66 1.2-1.2 1.56-1.68.39-.5.66-1.04.66-1.68h-1.5c0 .18-.06.4-.35.77-.3.38-.75.84-1.43 1.52zm0-5.66-.53.53c.68.68 1.14 1.14 1.43 1.53.29.37.35.58.35.77h1.5c0-.65-.27-1.18-.65-1.68-.37-.5-.92-1.03-1.57-1.69zm2 2.82v-.75H4.41v1.5h15.02z'
        fill='currentColor'
      />
    </svg>
  )
}
