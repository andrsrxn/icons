import type { Icon } from './types'

export const IconEarth: Icon = ({
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
      data-slot='ui-icon-earth'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M8 3.46A9.43 9.43 0 0 1 20.63 8.2L18 9l-1.2 3-2.7.7-1.08 4.3 2.26 3.84a9 9 0 0 1-3.28.59c-4.68 0-8.65-4-9.4-8.47L6.35 12 7.8 9h1.53l.9-2.61z'
        fill='currentColor'
      />
      <path
        d='M2.57 12A9.4 9.4 0 0 0 12 21.43 9.43 9.43 0 1 0 2.57 12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m8.67 3.99 1.5 1.34c.7.61.87 1.64.4 2.44l-.14.23a1.5 1.5 0 0 1-1.38.74 1.5 1.5 0 0 0-1.54 1.15l-.24 1.02A2.74 2.74 0 0 1 4.32 13l-1.3-.14m17.24-4.64-.24-.03a2.1 2.1 0 0 0-2.38 1.84l-.03.29a1.8 1.8 0 0 1-1.91 1.6 1.8 1.8 0 0 0-1.85 1.3l-.32 1.12-.01.07c-.27 1.32-.4 1.98-.26 2.61.15.64.56 1.17 1.38 2.24l.75.97'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
