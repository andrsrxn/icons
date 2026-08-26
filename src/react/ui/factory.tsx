import type { Icon } from './types'

export const IconFactory: Icon = ({
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
      data-slot='ui-icon-factory'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fill='currentColor'
        d='M3.71 3.24h3.54v3.75H3.71zM8.22 21.1l-.35-9.23 6.07-4.88 1.18 4.49 6.12-4.1v12.04l-1.38 1.68z'
      />
      <path
        d='m7.87 12.12 3.92-3.65c.72-.68 1.08-1.01 1.43-1.04a1 1 0 0 1 .7.22c.28.22.38.7.6 1.67.2.96.3 1.44.57 1.66a1 1 0 0 0 .7.22c.35-.02.71-.35 1.43-1l.7-.65c1.45-1.31 2.16-1.97 2.76-1.7.6.26.6 1.23.6 3.17v4.04c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88h-7M12 16h6.03M3.53 7.39h4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.49 4.8c.04-.9.06-1.34.35-1.61v-.02c.3-.27.74-.27 1.63-.27.9 0 1.34 0 1.63.27v.01c.3.28.31.72.36 1.61l.83 16.27H4.82c-.98 0-1.48 0-1.77-.3-.3-.32-.27-.8-.23-1.8z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
