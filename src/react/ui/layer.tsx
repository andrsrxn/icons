import type { Icon } from './types'

export const IconLayer: Icon = ({
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
      data-slot='layer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6.54 13.8c-1.83-.8-2.75-1.2-2.74-1.87 0-.66.92-1.04 2.77-1.82l4.66-1.95c.38-.16.57-.24.77-.24s.4.08.77.24l4.66 1.95c1.85.78 2.77 1.16 2.77 1.82s-.9 1.06-2.74 1.86l-4.66 2.03c-.4.18-.6.26-.8.26s-.4-.08-.8-.26z'
        fill='currentColor'
      />
      <path
        d='m11.25 8.15-4.8 2.01c-1.79.75-2.69 1.13-2.7 1.77 0 .65.9 1.03 2.68 1.81l.64.28 4.15 1.81c.38.17.58.25.78.25s.4-.08.78-.25l4.15-1.8.64-.29c1.78-.78 2.68-1.16 2.67-1.8 0-.65-.9-1.03-2.7-1.78l-4.79-2.01c-.37-.16-.55-.23-.75-.23s-.38.07-.75.23Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
