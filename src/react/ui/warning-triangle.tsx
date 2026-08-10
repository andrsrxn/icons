import type { Icon } from './types'

export const IconWarningTriangle: Icon = ({
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
      data-slot='warning-triangle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.26 6.5c.78-1.41 1.17-2.12 1.76-2.12s.98.7 1.75 2.12l5.57 10.14c.72 1.32 1.08 1.98.8 2.47-.3.49-1.05.49-2.56.49H6.45c-1.5 0-2.26 0-2.55-.5-.29-.48.08-1.14.8-2.46z'
        fill='currentColor'
      />
      <path d='M12.4 16.49a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0' fill='currentColor' />
      <path
        d='M12.02 13.65V9.5M6.45 19.6h11.13c1.5 0 2.26 0 2.55-.5.3-.48-.07-1.14-.8-2.46L13.78 6.5c-.77-1.41-1.16-2.12-1.75-2.12s-.98.7-1.76 2.12L4.7 16.64c-.72 1.32-1.09 1.98-.8 2.47s1.05.49 2.55.49Zm5.94-3.11a.4.4 0 1 1-.78 0 .4.4 0 0 1 .78 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
