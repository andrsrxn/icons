import type { Icon } from './types'

export const IconArrowsLeftRight: Icon = ({
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
      data-slot='arrows-left-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M17.9 2.84a.75.75 0 0 0-1.06 1.06l.53-.53zm.55 1.6-.53.54zm0 5.66.53.54zm-1.6.56a.75.75 0 0 0 1.05 1.06l-.53-.53zm-9.7 2.69a.75.75 0 1 0-1.05-1.07l.53.53zm-1.6.54-.53-.53zm0 5.66.53-.53zm.55 1.61a.75.75 0 0 0 1.06-1.06l-.53.53zM3.99 6.53a.75.75 0 1 0 0 1.5zm16.47 1.5a.75.75 0 0 0 0-1.5zm-.47 9.44a.75.75 0 1 0 0-1.5zm-16.45-1.5a.75.75 0 0 0 0 1.5zm13.83-12.6-.53.53 1.08 1.08.53-.54.53-.53-1.08-1.07zm1.08 6.73-.53-.53-1.08 1.09.53.53.53.53 1.08-1.09zm0-5.66-.53.54c.68.68 1.14 1.14 1.44 1.52.28.37.35.59.35.77h1.5c0-.64-.27-1.17-.66-1.68q-.58-.7-1.57-1.68zm0 5.66.53.54q1-.97 1.57-1.69c.39-.5.66-1.03.66-1.68h-1.5c0 .19-.07.4-.35.77-.3.4-.75.85-1.44 1.53zM6.63 12.81l-.53-.53-1.08 1.08.53.53.53.53 1.08-1.07zm-1.08 6.74-.53.53 1.08 1.08.53-.53.53-.53-1.08-1.08zm0-5.66-.53-.53q-1 .97-1.57 1.68c-.39.5-.66 1.03-.66 1.68h1.5c0-.18.07-.4.35-.77.3-.39.76-.85 1.44-1.53zm0 5.66.53-.53a18 18 0 0 1-1.44-1.53c-.28-.37-.35-.59-.35-.77H2.8c0 .64.27 1.18.66 1.68q.57.72 1.57 1.68zM3.99 7.28v.75h16.47v-1.5H3.99zm16 9.44v-.75H3.54v1.5H20z'
        fill='currentColor'
      />
    </svg>
  )
}
