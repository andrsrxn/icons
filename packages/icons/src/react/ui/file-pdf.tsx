import type { Icon } from './types'

export const IconFilePdf: Icon = ({
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
      data-slot='ui-icon-file-pdf'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M9.99 17.3v2.4c0 .84 0 1.26.34 1.56s.69.25 1.38.15c1.28-.18 2.8-.83 2.8-2.9 0-2.08-1.52-2.74-2.8-2.92-.69-.1-1.04-.14-1.38.15s-.34.73-.34 1.57M3.7 15.53v5.94m.03-5.94h2.12c.89 0 1.6.76 1.6 1.7s-.71 1.7-1.6 1.7H3.73m13.32-3.33v5.87m.25-5.87h3.82m-4.07 3.45h3.05'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        opacity='.2'
        d='M4.53 13.02V6.65c0-1.86 0-2.8.58-3.38s1.51-.6 3.38-.62l1.69-.01c1.02-.01 1.53-.02 1.93.16a2 2 0 0 1 1 1c.18.39.18.9.18 1.92 0 1.01 0 1.52.18 1.91a2 2 0 0 0 1 1c.4.18.9.18 1.91.18s1.52 0 1.91.18a2 2 0 0 1 1 .99c.18.4.18.9.18 1.91v1.13z'
        fill='currentColor'
      />
      <path
        d='M4.53 12.96V8.7c0-2.83 0-4.25.88-5.13s2.3-.87 5.12-.87h1c1.22 0 1.83 0 2.38.22.55.23.99.66 1.86 1.53l.97.97.91.9c.9.86 1.34 1.3 1.58 1.86s.24 1.18.24 2.43v2.35'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.11 3.16v1.89c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58H19'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
