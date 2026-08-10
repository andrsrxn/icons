import type { Icon } from './types'

export const IconBottle: Icon = ({
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
      data-slot='bottle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.08 4.5c.67-.67 1-1 1.42-1s.74.33 1.41 1l.46.46c.67.67 1 1 1 1.41 0 .42-.33.75-1 1.42l-1.5 1.5c-.18.18-.26.26-.32.36s-.1.22-.18.45l-1.29 4.02c-.07.23-.1.34-.17.44-.06.1-.15.19-.32.36l-4.77 4.77c-.66.67-1 1-1.41 1-.42 0-.75-.33-1.42-1L4.3 16c-.66-.66-1-1-1-1.41 0-.42.34-.75 1-1.42l4.8-4.79c.16-.16.24-.24.33-.3s.2-.1.42-.17l3.96-1.4c.22-.08.32-.11.42-.17s.17-.14.33-.3z'
        fill='currentColor'
      />
      <path
        d='M15.98 4.9c.49-.5.74-.76.94-.87a1.4 1.4 0 0 1 1.41-.01c.2.1.43.32.87.77.44.44.66.66.77.86q.38.72-.01 1.42c-.11.2-.36.45-.87.94a10 10 0 0 0-1.48 1.71c-1.08 1.7-.37 3.34-1.67 4.86a65 65 0 0 1-3.76 3.92c-1.27 1.23-1.9 1.85-2.72 1.84-.83 0-1.47-.65-2.75-1.93l-1.2-1.2c-1.25-1.25-1.88-1.88-1.89-2.7 0-.82.59-1.43 1.78-2.67a47 47 0 0 1 4-3.79c1.57-1.26 3.17-.59 4.86-1.67a10 10 0 0 0 1.72-1.48Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M13.99 11.3a3.3 3.3 0 0 1-.51 1.66 3.4 3.4 0 0 1-1.4 1.41'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
