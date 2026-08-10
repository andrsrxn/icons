import type { Icon } from './types'

export const IconListOrdered: Icon = ({
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
      data-slot='list-ordered'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3.05 14.37a.75.75 0 1 0 1.44.44l-.72-.22zm2.28-1 .04-.74zm1.14 2.31.6.45zm-2.7 3.16-.56-.5a.75.75 0 0 0 .56 1.25zm3 .75a.75.75 0 0 0 0-1.5zM3.13 5.62a.75.75 0 1 0 .79 1.28l-.4-.64zm2.83-.87h.75a.75.75 0 0 0-1.15-.64zm-.75 5.52a.75.75 0 0 0 1.5 0zm4.47-5.02a.75.75 0 1 0 0 1.5zm10.57 1.5a.75.75 0 0 0 0-1.5zM9.7 11.25a.75.75 0 0 0 0 1.5zm10.57 1.5a.75.75 0 0 0 0-1.5zM9.7 17.25a.75.75 0 0 0 0 1.5zm10.57 1.5a.75.75 0 0 0 0-1.5zm-16.5-4.16.72.22c.03-.12.13-.32.29-.47q.2-.23.51-.21l.04-.75.04-.75a2.1 2.1 0 0 0-1.65.64c-.36.36-.57.8-.67 1.1zm1.56-1.21-.04.75c.47.02.63.23.69.4.08.22.04.5-.11.7l.6.45.6.45c.45-.6.58-1.41.32-2.13-.29-.76-1-1.31-2.02-1.37zm1.14 2.3-.6-.45c-.32.43-1.9 2.24-2.66 3.11l.56.5.56.5c.75-.85 2.37-2.71 2.74-3.2zm-2.7 3.16v.75h3v-1.5h-3zM3.53 6.26l.4.64 2.43-1.52-.4-.63-.39-.64-2.43 1.51zm2.44-1.51h-.75v5.52h1.5V4.75zM9.69 6v.75h10.57v-1.5H9.7zm0 6v.75h10.57v-1.5H9.7zm0 6v.75h10.57v-1.5H9.7z'
        fill='currentColor'
      />
    </svg>
  )
}
