import type { Icon } from './types'

export const IconAnchor: Icon = ({
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
      data-slot='anchor'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='5.87' r='2.32' fill='currentColor' />
      <path d='M12 20.54V8.2' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <circle cx='12' cy='5.87' r='2.32' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M18.92 14.57c0 2.74-3.1 5.97-6.92 5.97s-6.92-3.23-6.92-5.97'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.16 12H8.84m-2.06 3.06-.34-.23c-.7-.45-1.04-.68-1.4-.63-.38.05-.65.35-1.2.97l-.27.31m13.65-.42.34-.23c.7-.45 1.04-.68 1.4-.63.38.05.65.36 1.2.97l.27.31'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
