import type { Icon } from './types'

export const IconBookmark: Icon = ({
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
      data-slot='bookmark'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.65 17.2V8.02c0-1.89 0-2.83.58-3.42.6-.58 1.53-.58 3.42-.58h4.7c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v9.18c0 1.85 0 2.78-.58 3.05-.57.27-1.28-.33-2.7-1.51l-1.79-1.5c-.61-.51-.92-.77-1.28-.77s-.67.26-1.28.77l-1.79 1.5c-1.42 1.18-2.13 1.78-2.7 1.5-.58-.26-.58-1.19-.58-3.04'
        fill='currentColor'
      />
      <path
        d='M5.65 17.22v-9.2c0-1.89 0-2.83.58-3.42.6-.58 1.53-.58 3.42-.58h4.7c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v9.2c0 1.84 0 2.77-.57 3.03-.58.27-1.29-.32-2.7-1.5l-1.8-1.49c-.61-.5-.92-.76-1.28-.76s-.67.25-1.28.76l-1.8 1.5c-1.41 1.17-2.12 1.76-2.7 1.5-.57-.27-.57-1.2-.57-3.04Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
