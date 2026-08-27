import type { Icon } from './types'

export const IconFeather: Icon = ({
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
      data-slot='ui-icon-feather'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M19.93 11.77c1.04-1.53 1.56-2.3 1.6-3.15l-.02-.45c-.09-.85-.66-1.58-1.8-3.04a6 6 0 0 0-.51-.62l-.08-.07a6 6 0 0 0-.64-.48c-1.6-1.1-2.4-1.66-3.3-1.68l-.47.02c-.88.12-1.62.75-3.1 2.01L9.18 6.4c-.53.45-.8.68-1 .96s-.34.6-.62 1.24l-1.85 4.33c-.13.31-.2.46-.24.62a3 3 0 0 0-.12 1.18c.02.17.06.33.13.66.17.8.26 1.2.42 1.52a3 3 0 0 0 1.96 1.59c.35.09.76.09 1.57.1h.9c.53 0 .79 0 1.05-.04l.38-.09c.25-.07.48-.2.96-.44l3.15-1.6a6 6 0 0 0 1.3-.78c.29-.25.5-.56.93-1.2z'
        fill='currentColor'
      />
      <path
        d='M19.92 12.1a5.71 5.71 0 0 0-8.44-7.73 321 321 0 0 0-3.6 3.95c-1.23 1.39-1.8 3.35-2.05 5.21-.3 2.23-.45 3.34.7 4.4 1.14 1.06 2.31.8 4.65.3 1.98-.43 4-1.12 5.06-2.21 1.12-1.16 2.45-2.58 3.68-3.92M2.75 21.36 15.7 7.31m-5.2 5.87 4.53-.19'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
