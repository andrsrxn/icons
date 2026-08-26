import type { Icon } from './types'

export const IconUnite: Icon = ({
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
      data-slot='ui-icon-unite'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M21.26 15.12c0 2.83 0 4.25-.87 5.13-.88.87-2.3.87-5.13.87h-4.13a2.8 2.8 0 0 1-2.82-2.84v-.12a2.7 2.7 0 0 0-2.7-2.73 2.7 2.7 0 0 1-2.7-2.7V8.95c0-2.83 0-4.24.89-5.12.87-.88 2.29-.88 5.12-.88h3.81a2.6 2.6 0 0 1 2.6 2.6 2.6 2.6 0 0 0 2.6 2.6h.37a2.97 2.97 0 0 1 2.96 2.96z'
        fill='currentColor'
      />
      <path
        d='M21.26 15.3v-2.2c0-1.67 0-2.5-.32-3.14a3 3 0 0 0-1.32-1.32c-.64-.33-1.49-.33-3.18-.33-.25 0-.37 0-.47-.04a.5.5 0 0 1-.26-.26c-.04-.1-.04-.21-.04-.46 0-1.44 0-2.17-.24-2.74a3 3 0 0 0-1.57-1.57C13.29 3 12.56 3 11.12 3H9c-2.83 0-4.24 0-5.12.88S3 6.18 3 9v2.1c0 1.43 0 2.14.24 2.7a3 3 0 0 0 1.6 1.6c.55.23 1.26.23 2.69.23.24 0 .35 0 .45.04a.5.5 0 0 1 .26.27c.04.1.04.21.04.45 0 1.77 0 2.65.35 3.3a3 3 0 0 0 1.25 1.26c.66.35 1.53.35 3.26.35h2.12c2.83 0 4.25 0 5.13-.88s.87-2.3.87-5.12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
