import type { Icon } from './types'

export const IconShovel: Icon = ({
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
      data-slot='shovel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.29 12.44c.5-.7.76-1.06 1.22-1.1s.8.3 1.5 1l1.78 1.78 1.78 1.78c.68.68 1.03 1.03.99 1.49s-.4.72-1.1 1.22C8.4 20.8 5.8 20.16 4.79 19.77a1 1 0 0 1-.41-.25c-.15-.15-.18-.23-.25-.4-.4-1.01-1.06-3.6 1.16-6.68'
        fill='currentColor'
      />
      <path d='M15.92 8 8.2 15.7' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <path
        d='M16 4.21c.27-.35.41-.52.64-.53.22-.02.39.15.73.5l2.36 2.35c.34.34.5.51.5.74-.02.22-.19.36-.54.64-1.23.99-2.52 1.34-3.78.08s-.9-2.54.08-3.78ZM5.29 12.44c.5-.7.76-1.06 1.22-1.1s.8.3 1.5 1l1.78 1.78 1.78 1.78c.68.68 1.03 1.03.99 1.49s-.4.72-1.1 1.22C8.4 20.8 5.8 20.16 4.79 19.77a1 1 0 0 1-.41-.25c-.15-.15-.18-.23-.25-.4-.4-1.01-1.06-3.6 1.16-6.68Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
