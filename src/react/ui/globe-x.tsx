import type { Icon } from './types'

export const IconGlobeX: Icon = ({
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
      data-slot='globe-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M20.43 12a8.43 8.43 0 1 1-16.86 0 8.43 8.43 0 0 1 16.86 0'
        fill='currentColor'
      />
      <path
        d='M12 21.18a.75.75 0 1 0 0-1.5zM20.43 12v.75c.41 0 .75-.34.75-.75zm-5.96 0a.75.75 0 0 0 1.5 0zm1.42 2.83a.75.75 0 1 0-1.06 1.06l.53-.53zm4 6.13a.75.75 0 0 0 1.07-1.06l-.53.53zm1.07-5.07a.75.75 0 1 0-1.06-1.06l.53.53zm-6.13 4a.75.75 0 0 0 1.06 1.07l-.53-.53zm-2.83.54v-.75A7.7 7.7 0 0 1 4.32 12h-1.5A9.2 9.2 0 0 0 12 21.18zM3.57 12h.75A7.7 7.7 0 0 1 12 4.32v-1.5A9.2 9.2 0 0 0 2.82 12zM12 3.57v.75A7.7 7.7 0 0 1 19.68 12h1.5A9.2 9.2 0 0 0 12 2.82zm0 16.86v-.75c-.16 0-.4-.09-.7-.42q-.46-.5-.88-1.57c-.54-1.42-.9-3.43-.9-5.69H8.04c0 2.4.37 4.6 1 6.23.3.8.69 1.52 1.16 2.04s1.08.9 1.81.9zM8.78 12h.75c0-2.26.35-4.27.9-5.69q.4-1.07.87-1.57c.3-.33.54-.42.7-.42v-1.5c-.73 0-1.34.4-1.81.91a7 7 0 0 0-1.17 2.04c-.62 1.63-1 3.84-1 6.23zM12 3.57v.75c.16 0 .4.09.7.42q.46.5.88 1.57c.54 1.42.9 3.43.9 5.69h1.49c0-2.4-.37-4.6-1-6.23a7 7 0 0 0-1.16-2.04 2.5 2.5 0 0 0-1.81-.9zM3.57 12v.75h16.86v-1.5H3.57zm11.79 3.36-.53.53 5.07 5.07.53-.53.53-.53-5.07-5.07zm5.07 0-.53-.53-5.07 5.07.53.53.53.53 5.07-5.07z'
        fill='currentColor'
      />
    </svg>
  )
}
