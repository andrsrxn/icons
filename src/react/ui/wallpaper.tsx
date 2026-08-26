import type { Icon } from './types'

export const IconWallpaper: Icon = ({
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
      data-slot='ui-icon-wallpaper'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.87 9.9c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h6.4c2.88 0 4.32 0 5.2.9s.86 2.33.8 5.2v.16c-.05 2.8-.07 4.2-.8 4.4-.72.2-1.45-1-2.9-3.39l-.22-.36c-.71-1.16-1.06-1.74-1.6-1.76-.53-.02-.93.53-1.73 1.63l-1.41 1.94c-.58.8-.87 1.2-1.3 1.26-.42.05-.8-.25-1.58-.87l-.44-.36c-.62-.5-.92-.75-1.29-.74-.36 0-.66.26-1.26.78l-.56.48C4.75 14.4 4.04 15 3.46 14.74c-.59-.27-.59-1.21-.59-3.09z'
        fill='currentColor'
      />
      <rect
        x='2.7'
        y='3.9'
        width='18.61'
        height='12.47'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.25 20.1h7.48m-3.73 0v-3.62m8.24-1.14-2.88-4.84c-.76-1.27-1.14-1.91-1.7-1.91s-.95.62-1.73 1.89l-1.12 1.84c-.6.99-.9 1.48-1.39 1.54-.47.06-.89-.34-1.71-1.15l-.3-.28c-.66-.65-1-.98-1.4-.97-.42 0-.75.33-1.4 1l-2.88 2.88'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.56 7.7a.7.7 0 1 1-1.39 0 .7.7 0 0 1 1.39 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
