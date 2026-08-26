import type { Icon } from './types'

export const IconPerspective: Icon = ({
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
      data-slot='ui-icon-perspective'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.7 12.01c0-2.62 0-3.93.79-4.79.8-.87 2.1-.97 4.72-1.18l6.62-.52c3.03-.25 4.55-.37 5.51.52.96.9.96 2.42.96 5.46v1.01c0 3.04 0 4.55-.96 5.44s-2.47.78-5.5.55l-6.61-.51c-2.62-.2-3.93-.3-4.73-1.16l-.01-.01c-.8-.86-.8-2.18-.8-4.8'
        fill='currentColor'
      />
      <path
        d='M2.7 11.96c0-2.26 0-3.39.61-4.2l.25-.28c.72-.72 1.83-.88 4.07-1.2l6.84-.95c3.18-.45 4.77-.67 5.8.23s1.03 2.5 1.03 5.71v1.42c0 3.22 0 4.84-1.03 5.73-1.04.9-2.63.67-5.83.2l-6.83-.98c-2.23-.33-3.34-.49-4.05-1.2l-.25-.3c-.61-.8-.61-1.93-.61-4.18'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
