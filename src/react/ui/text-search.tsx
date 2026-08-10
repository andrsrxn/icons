import type { Icon } from './types'

export const IconTextSearch: Icon = ({
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
      data-slot='text-search'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M19.1 13.43a3.23 3.23 0 1 1-6.47 0 3.23 3.23 0 0 1 6.47 0'
        fill='currentColor'
      />
      <path
        d='M3.6 5.25a.75.75 0 0 0 0 1.5zM20 6.75a.75.75 0 0 0 0-1.5zm-16.4 4.5a.75.75 0 0 0 0 1.5zm5.83 1.5a.75.75 0 0 0 0-1.5zm-5.84 4.5a.75.75 0 0 0 0 1.5zm5.84 1.5a.75.75 0 0 0 0-1.5zM3.6 6v.75H20v-1.5H3.6zm0 6v.75h5.84v-1.5H3.6zm0 6v.75h5.84v-1.5H3.6z'
        fill='currentColor'
      />
      <path
        d='M18.18 15.7a3.22 3.22 0 0 0-2.31-5.5 3.23 3.23 0 1 0 2.3 5.5Zm0 0 2.3 2.3'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
