import type { Icon } from './types'

export const IconLayersHalf: Icon = ({
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
      data-slot='ui-icon-layers-half'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m3.16 8.8 7.72-3.04a3 3 0 0 1 2.2 0l7.75 3.04a1 1 0 0 1 .02 1.85l-7.71 3.24a3 3 0 0 1-2.33 0l-7.67-3.24a1 1 0 0 1 .02-1.85'
        fill='currentColor'
      />
      <path
        d='m5.44 7.9 4.34-1.7c1.09-.44 1.63-.65 2.2-.65.56 0 1.1.21 2.2.64l4.36 1.7c1.94.77 2.92 1.15 2.93 1.83 0 .67-.96 1.08-2.89 1.89L14.3 13.4h0c-1.14.48-1.72.72-2.32.72s-1.18-.24-2.33-.72L5.4 11.6c-1.92-.8-2.88-1.21-2.87-1.88S3.5 8.66 5.44 7.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m17.79 12 .61.23c2 .74 3 1.12 3.01 1.8.02.68-.97 1.09-2.93 1.91L14.3 17.7c-1.14.48-1.72.72-2.32.72s-1.18-.24-2.33-.73l-4.22-1.78c-1.93-.81-2.9-1.22-2.89-1.9s.99-1.05 2.94-1.8l.54-.21'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
