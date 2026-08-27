import type { Icon } from './types'

export const IconBellOn: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-bell-on'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M20.49 14.9q.11.13.15.2a2 2 0 0 1 .4 1.07v.25l-.01.6a2 2 0 0 1-1.72 1.72c-.13.02-.3.02-.6.02H5.27c-.3 0-.46 0-.58-.02a2 2 0 0 1-1.73-1.73c-.02-.12-.02-.28-.02-.58v-.24a2 2 0 0 1 .42-1.1l.16-.19 1.19-1.36v-2.98A7.27 7.27 0 0 1 12 3.29a7.3 7.3 0 0 1 7.32 7.32v2.93z'
        fill='currentColor'
      />
      <path
        d='M20.49 14.9q.11.13.15.2a2 2 0 0 1 .4 1.07v.25l-.01.6a2 2 0 0 1-1.72 1.72c-.13.02-.3.02-.6.02H5.27c-.3 0-.46 0-.58-.02a2 2 0 0 1-1.73-1.73c-.02-.12-.02-.28-.02-.58v-.24a2 2 0 0 1 .42-1.1l.16-.19 1.19-1.36v-2.98A7.27 7.27 0 0 1 12 3.29a7.3 7.3 0 0 1 7.32 7.32v2.93zM8.12 18.76c0 1.55 1.74 2.82 3.88 2.82s3.87-1.27 3.87-2.82M2.1 6.93c.38-1.04.79-1.8 1.66-2.8a7 7 0 0 1 2.18-1.8m16.08 4.6a8 8 0 0 0-1.66-2.8 7 7 0 0 0-2.18-1.8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
