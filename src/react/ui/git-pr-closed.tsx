import type { Icon } from './types'

export const IconGitPrClosed: Icon = ({
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
      data-slot='git-pr-closed'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m11 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M18.25 10.26a.75.75 0 0 0-1.5 0zm-2.35-7a.75.75 0 0 0-1.06 1.06l.53-.53zm3.2 5.32a.75.75 0 1 0 1.06-1.06l-.53.53zm1.06-4.26a.75.75 0 1 0-1.06-1.06l.53.53zm-5.32 3.2a.75.75 0 0 0 1.06 1.06l-.53-.53zM9 6.5h-.75c0 .97-.78 1.75-1.75 1.75v1.5c1.8 0 3.25-1.46 3.25-3.25zM6.5 9v-.75c-.97 0-1.75-.78-1.75-1.75h-1.5c0 1.8 1.46 3.25 3.25 3.25zM4 6.5h.75c0-.97.78-1.75 1.75-1.75v-1.5A3.25 3.25 0 0 0 3.25 6.5zM6.5 4v.75c.97 0 1.75.78 1.75 1.75h1.5c0-1.8-1.46-3.25-3.25-3.25zM9 17.5h-.75c0 .97-.78 1.75-1.75 1.75v1.5c1.8 0 3.25-1.46 3.25-3.25zM6.5 20v-.75c-.97 0-1.75-.78-1.75-1.75h-1.5c0 1.8 1.46 3.25 3.25 3.25zM4 17.5h.75c0-.97.78-1.75 1.75-1.75v-1.5a3.25 3.25 0 0 0-3.25 3.25zM6.5 15v.75c.97 0 1.75.78 1.75 1.75h1.5c0-1.8-1.46-3.25-3.25-3.25zM20 17.5h-.75c0 .97-.78 1.75-1.75 1.75v1.5c1.8 0 3.25-1.46 3.25-3.25zM17.5 20v-.75c-.97 0-1.75-.78-1.75-1.75h-1.5c0 1.8 1.46 3.25 3.25 3.25zM15 17.5h.75c0-.97.78-1.75 1.75-1.75v-1.5a3.25 3.25 0 0 0-3.25 3.25zm2.5-2.5v.75c.97 0 1.75.78 1.75 1.75h1.5c0-1.8-1.46-3.25-3.25-3.25zm-11 0h.75V9h-1.5v6zm11 0h.75v-4.74h-1.5V15zM15.37 3.79l-.53.53 4.26 4.26.53-.53.53-.53-4.26-4.26zm4.26 0-.53-.53-4.26 4.26.53.53.53.53 4.26-4.26z'
        fill='currentColor'
      />
    </svg>
  )
}
