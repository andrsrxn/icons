import type { Icon } from './types'

export const IconArrowsHorizontal: Icon = ({
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
      data-slot='arrows-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M17.82 7.4a.75.75 0 0 0-1.06 1.05l.53-.53zm.72 1.77-.53.53zm0 5.66.54.53zm-1.78.72a.75.75 0 0 0 1.06 1.06l-.53-.53zm-9.52-7.1a.75.75 0 0 0-1.06-1.06l.53.53zm-1.78.72.53.53zm0 5.66.52-.54zm.72 1.78a.75.75 0 0 0 1.06-1.06l-.53.53zm-2.73-4.62h.75zm0-.74a.75.75 0 0 0 0 1.5zM17.3 7.92l-.53.53 1.25 1.25.53-.53.53-.53-1.25-1.25zm1.26 6.9-.53-.52-1.26 1.25.53.53.53.53 1.26-1.25zm0-5.65L18 9.7c.69.68 1.14 1.14 1.44 1.53.28.37.35.58.35.77h1.5c0-.65-.27-1.18-.66-1.68q-.57-.72-1.57-1.68zm0 5.66.53.53c.65-.65 1.2-1.2 1.56-1.68.39-.5.66-1.04.66-1.68h-1.5c0 .18-.07.4-.35.77-.3.39-.75.85-1.43 1.53zM6.7 7.92l-.53-.53-1.25 1.24.53.54.53.53 1.25-1.25zm-1.26 6.9-.53.54 1.26 1.25.53-.53.53-.53-1.26-1.26zm0-5.65-.52-.54q-1 .97-1.57 1.68a2.7 2.7 0 0 0-.66 1.68h1.5c0-.18.07-.4.35-.77.3-.38.75-.84 1.44-1.52zm0 5.66.53-.54a18 18 0 0 1-1.43-1.52c-.28-.38-.35-.6-.35-.78H2.7c0 .65.27 1.18.66 1.69q.57.7 1.56 1.68zm-2-2.83v.75h17.1v-1.5H3.45z'
        fill='currentColor'
      />
    </svg>
  )
}
