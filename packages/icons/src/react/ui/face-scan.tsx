import type { Icon } from './types'

export const IconFaceScan: Icon = ({
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
      data-slot='ui-icon-face-scan'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M15.93 21.32c2.27 0 3.4 0 4.2-.57a3 3 0 0 0 .64-.65c.58-.8.58-1.93.58-4.2M15.97 2.71c2.23 0 3.35 0 4.13.56a3 3 0 0 1 .69.69c.56.78.56 1.9.56 4.14M8.07 21.32c-2.27 0-3.4 0-4.2-.58a3 3 0 0 1-.64-.64c-.58-.8-.58-1.93-.58-4.2M8.07 2.71c-2.27 0-3.4 0-4.2.58a3 3 0 0 0-.64.65c-.58.79-.58 1.92-.58 4.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='6.34'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='12'
        r='6.34'
        transform='rotate(90 12 12)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.53 10.48a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0m3.77 0a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.96 14.15c-.42.38-1.09.63-1.96.63s-1.5-.28-1.96-.63'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
