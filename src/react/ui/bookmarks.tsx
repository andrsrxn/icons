import type { Icon } from './types'

export const IconBookmarks: Icon = ({
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
      data-slot='bookmarks'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4.1 17.36v-6.22c0-1.88 0-2.83.58-3.41s1.53-.59 3.41-.59h2.55c1.88 0 2.82 0 3.41.59.59.58.59 1.53.59 3.41v6.22c0 1.85 0 2.78-.58 3.05s-1.29-.33-2.7-1.52l-.71-.59c-.62-.51-.92-.77-1.29-.77-.36 0-.67.26-1.28.77l-.7.6c-1.43 1.18-2.14 1.78-2.71 1.5-.58-.26-.58-1.19-.58-3.04'
        fill='currentColor'
      />
      <path
        d='m14.64 13.9 1.99 1.67c1.42 1.18 2.13 1.77 2.7 1.5s.58-1.2.58-3.04V7.8c0-1.89 0-2.83-.59-3.42-.58-.58-1.53-.58-3.41-.58h-3.2c-1.26 0-1.89 0-2.35.27a2 2 0 0 0-.72.72c-.28.46-.28 1.1-.28 2.35m-5.27 4v6.23c0 1.85 0 2.77.58 3.04.57.27 1.28-.32 2.7-1.5l.71-.6c.62-.5.92-.76 1.28-.76.37 0 .67.26 1.28.77l.72.6c1.42 1.17 2.13 1.76 2.7 1.5.58-.28.58-1.2.58-3.05v-6.23c0-1.88 0-2.83-.59-3.41s-1.53-.59-3.41-.59H8.09c-1.88 0-2.83 0-3.41.59-.59.58-.59 1.53-.59 3.41Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
