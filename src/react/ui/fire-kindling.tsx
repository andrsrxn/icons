import type { Icon } from './types'

export const IconFireKindling: Icon = ({
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
      data-slot='fire-kindling'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M13.87 6.9a5.4 5.4 0 0 1-1.2-2.98c-.04-.33-.34-.52-.59-.3-.33.3-.73.78-1.02 1.42-.43.94-.48 2-.47 2.65.01.3-.24.58-.52.46a1.8 1.8 0 0 1-.8-.85c-.14-.23-.4-.26-.52-.02a4.3 4.3 0 0 0-.36 2.35c.26 2.4 1.92 3.38 3.34 3.38 1.14 0 2.94-.37 3.33-2.61.18-1.08-.08-2.2-1.2-3.5'
        fill='currentColor'
      />
      <path
        d='m3.69 13.8 16.62 6m-.09-6.22L3.77 20.03'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M13.87 6.9a5.4 5.4 0 0 1-1.2-2.98c-.04-.33-.34-.52-.59-.3-.33.3-.73.78-1.02 1.42-.43.94-.48 2-.47 2.65.01.3-.24.58-.52.46a1.8 1.8 0 0 1-.8-.85c-.14-.23-.4-.26-.52-.02a4.3 4.3 0 0 0-.36 2.35c.26 2.4 1.92 3.38 3.34 3.38 1.14 0 2.94-.37 3.33-2.61.18-1.08-.08-2.2-1.2-3.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
