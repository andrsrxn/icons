import type { Icon } from './types'

export const IconSave: Icon = ({
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
      data-slot='ui-icon-save'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.67 20.85c-.67 0-1 0-1.24-.16a1 1 0 0 1-.32-.31c-.15-.25-.15-.58-.15-1.25V4.87c0-.68 0-1.01.16-1.26a1 1 0 0 1 .3-.3c.24-.16.58-.16 1.26-.16.57 0 .85 0 1.07.12a1 1 0 0 1 .29.23c.16.2.22.47.33 1.03l.21 1.01c.16.77.24 1.15.52 1.37.27.23.66.23 1.44.23h1.6c.86 0 1.28 0 1.57-.26.28-.25.33-.67.43-1.52l.25-2.3 3.51 2.77 2.55 2.54c.3.3.44.44.52.62.07.19.07.4.07.8v9.39c0 .62 0 .94-.13 1.17a1 1 0 0 1-.36.36c-.24.14-.55.14-1.18.14-.56 0-.84 0-1.05-.12a1 1 0 0 1-.36-.31c-.14-.2-.17-.48-.24-1.03l-.46-3.61c-.1-.78-.14-1.17-.4-1.41-.26-.25-.65-.28-1.43-.34l-2.28-.17-.15-.01h-.15l-2.27.18c-.8.06-1.2.09-1.46.34-.26.26-.3.65-.38 1.45l-.37 3.5c-.06.6-.09.9-.25 1.11a1 1 0 0 1-.3.28c-.24.14-.54.14-1.15.14'
        fill='currentColor'
      />
      <path
        d='M10 21.26c-2.83 0-4.24 0-5.12-.87C4 19.5 4 18.09 4 15.26v-6.4c0-2.84 0-4.25.88-5.13s2.3-.88 5.12-.88h1.8c1.17 0 1.75 0 2.27.2.53.21.95.6 1.8 1.39l1.2 1.11.94.84c.98.88 1.47 1.32 1.73 1.9.26.59.26 1.24.26 2.56v4.41c0 2.83 0 4.25-.88 5.13s-2.3.87-5.12.87z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.35 3.06v1.06c0 1.08 0 1.63.2 2.04q.31.61.92.92c.42.2.96.2 2.04.2 1.09 0 1.63 0 2.05-.2a2 2 0 0 0 .91-.92c.2-.41.2-.96.2-2.04V3.06m2.98 18.09V18c0-1.89 0-2.83-.59-3.41-.58-.59-1.52-.59-3.41-.59h-1.3c-1.89 0-2.83 0-3.41.59-.59.58-.59 1.52-.59 3.41v3.15'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
