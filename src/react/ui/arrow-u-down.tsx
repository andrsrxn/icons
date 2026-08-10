import type { Icon } from './types'

export const IconArrowUDown: Icon = ({
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
      data-slot='arrow-u-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M12.2 16.95a.75.75 0 0 0-1.06 1.06l.53-.53zm.3 1.37.54-.53zm5.66 0-.53-.53zm1.37-.3a.75.75 0 0 0-1.06-1.07l.53.53zm-4.15-9.98h.75zm-8.73 0H5.9zM5.9 18.08a.75.75 0 0 0 1.5 0zm5.12-14.4v.74zm.65 13.8-.53.53.83.84.54-.53.53-.53-.83-.84zm6.5.84.52.53.84-.84-.53-.53-.53-.53-.84.84zm-5.67 0-.53.53q.97 1 1.71 1.57a2.8 2.8 0 0 0 1.7.66v-1.5c-.19 0-.42-.07-.8-.36-.4-.3-.87-.76-1.54-1.43zm5.66 0-.53-.53c-.68.69-1.13 1.14-1.51 1.44-.36.29-.56.35-.74.35v1.5c.65 0 1.17-.28 1.67-.67q.7-.57 1.64-1.56zm-2.78 2h.75V8.05h-1.5v12.29zM6.65 8.05H5.9v10.04h1.5V8.04zm4.37-4.37v-.75A5.1 5.1 0 0 0 5.9 8.04h1.5c0-2 1.62-3.62 3.62-3.62zm4.36 4.37h.75a5.1 5.1 0 0 0-5.11-5.12v1.5a3.6 3.6 0 0 1 3.6 3.62z'
        fill='currentColor'
      />
    </svg>
  )
}
