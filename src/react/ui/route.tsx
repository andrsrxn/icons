import type { Icon } from './types'

export const IconRoute: Icon = ({
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
      data-slot='route'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M9 6.26a2.74 2.74 0 1 1-5.49 0 2.74 2.74 0 0 1 5.49 0m11.49 11.48a2.74 2.74 0 1 1-5.49 0 2.74 2.74 0 0 1 5.49 0'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M12 4.73a.75.75 0 0 0 0 1.5zm7 4.02-.75-.04zM5.01 15.33l-.75-.07zM12 19.32a.75.75 0 0 0 0-1.5zM9 6.26h-.75a2 2 0 0 1-2 1.99v1.5a3.5 3.5 0 0 0 3.5-3.5zM6.26 9v-.75a2 2 0 0 1-2-2h-1.5a3.5 3.5 0 0 0 3.5 3.5zM3.5 6.26h.75c0-1.1.9-2 2-2v-1.5a3.5 3.5 0 0 0-3.5 3.5zM6.26 3.5v.75a2 2 0 0 1 1.99 2h1.5a3.5 3.5 0 0 0-3.5-3.5zm14.23 14.23h-.75a2 2 0 0 1-2 2v1.5a3.5 3.5 0 0 0 3.5-3.5zm-2.75 2.75v-.75a2 2 0 0 1-1.99-2h-1.5a3.5 3.5 0 0 0 3.5 3.5zM15 17.74h.75a2 2 0 0 1 2-1.99v-1.5a3.5 3.5 0 0 0-3.5 3.5zM17.74 15v.75a2 2 0 0 1 2 2h1.5a3.5 3.5 0 0 0-3.5-3.5zm-5.73-9.52v.75c.67 0 2.29-.2 3.84.08q1.15.2 1.8.76c.38.34.64.83.6 1.64l.74.04.75.04a3.4 3.4 0 0 0-1.1-2.84 5 5 0 0 0-2.52-1.11c-1.72-.32-3.7-.11-4.11-.11zm6.98 3.27-.74-.04q-.06.81-.47 1.2-.4.45-1.25.71c-1.16.38-2.73.45-4.46.54-1.66.08-3.48.18-4.91.67a5 5 0 0 0-1.94 1.2 3.7 3.7 0 0 0-.95 2.23l.75.07.74.07q.1-.89.56-1.36.46-.5 1.33-.79c1.2-.41 2.78-.5 4.5-.6 1.65-.08 3.45-.15 4.84-.6a4.3 4.3 0 0 0 1.89-1.11q.79-.84.86-2.15zM5.02 15.33l-.75-.07a3.1 3.1 0 0 0 .97 2.72c.66.6 1.56.93 2.42 1.11 1.71.36 3.68.23 4.35.23v-1.5c-.83 0-2.53.12-4.04-.2a4 4 0 0 1-1.72-.75c-.34-.31-.56-.75-.49-1.47z'
        fill='currentColor'
      />
    </svg>
  )
}
