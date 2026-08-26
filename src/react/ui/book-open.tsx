import type { Icon } from './types'

export const IconBookOpen: Icon = ({
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
      data-slot='ui-icon-book-open'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.74 4.08c1.83 0 3.1.34 3.85.65.36.14.54.22.72.47.17.26.17.5.17.98v10.93c0 1.26 0 1.88-.34 2.18s-1.03.2-2.4.02a15 15 0 0 0-4 0c-1.37.19-2.06.28-2.4-.02s-.34-.92-.34-2.18V6.18c0-.48 0-.72.17-.98.17-.25.35-.33.72-.47.76-.3 2.02-.65 3.85-.65'
        fill='currentColor'
      />
      <path
        d='M7.26 3.78c1.98 0 3.3.52 4.03.92.29.16.43.24.57.48s.14.44.14.86v11.03c0 1.27 0 1.9-.36 2.2s-1.04.17-2.4-.09a11 11 0 0 0-1.98-.2c-.64 0-1.33.08-1.99.2-1.35.26-2.02.4-2.39.1-.36-.3-.36-.94-.36-2.2V6.9c0-.82 0-1.23.35-1.74s.61-.61 1.14-.82c.76-.3 1.84-.56 3.25-.56m9.48 0c1.98 0 3.3.52 4.03.92.29.16.43.24.57.48s.14.44.14.86v11.03c0 1.27 0 1.9-.36 2.2-.37.3-1.04.17-2.4-.09a11 11 0 0 0-1.98-.2c-.64 0-1.34.08-1.99.2-1.35.26-2.03.4-2.39.1s-.36-.94-.36-2.2V6.9c0-.82 0-1.23.35-1.74s.61-.61 1.13-.82c.77-.3 1.85-.56 3.26-.56'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M18.6 8.12a7 7 0 0 0-2-.22c-.72.01-1.17.07-1.73.22m3.73 3.66a7 7 0 0 0-2-.21c-.72 0-1.17.06-1.73.21m3.73 3.67a7 7 0 0 0-2-.22c-.72.01-1.17.07-1.73.22'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
