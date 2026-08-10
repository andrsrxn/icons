import type { Icon } from './types'

export const IconTextOutdent: Icon = ({
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
      data-slot='text-outdent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M10.82 5.25a.75.75 0 0 0 0 1.5zM20 6.75a.75.75 0 0 0 0-1.5zm-16 4.5a.75.75 0 0 0 0 1.5zm16 1.5a.75.75 0 0 0 0-1.5zm-16 4.5a.75.75 0 0 0 0 1.5zm16 1.5a.75.75 0 0 0 0-1.5zM7.85 4.43a.75.75 0 1 0-.62-1.37l.3.69zm-1.27-.25-.3-.69zm0 3.64-.3.69zm.65 1.12a.75.75 0 0 0 .62-1.37l-.31.68zM3.97 6h-.75zm6.85 0v.75H20v-1.5h-9.18zM4 12v.75h16v-1.5H4zm0 6v.75h16v-1.5H4zM7.54 3.75l-.31-.69-.95.43.3.69.31.68.96-.43zm-.96 4.07-.3.69.95.43.3-.69.32-.68-.96-.43zm0-3.64-.3-.69c-.85.38-1.57.7-2.06 1.02-.47.3-1 .75-1 1.49h1.5c0 .09-.09.02.3-.23.39-.24.98-.5 1.87-.91zm0 3.64.31-.68c-.9-.4-1.48-.67-1.86-.91-.4-.25-.3-.32-.3-.23H3.21c0 .73.52 1.19 1 1.5q.76.44 2.05 1z'
        fill='currentColor'
      />
    </svg>
  )
}
