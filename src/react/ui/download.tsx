import type { Icon } from './types'

export const IconDownload: Icon = ({
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
      data-slot='ui-icon-download'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.08 12.84h17.84v2.32c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H9.08c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M3.35 12.84v2.32c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88h5.3c2.83 0 4.25 0 5.13-.88s.88-2.3.88-5.12v-2.32'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m16.9 10.47-2.07 2.07c-1.33 1.33-2 2-2.83 2-.82 0-1.5-.67-2.83-2l-2.06-2.07M12 1.9v12.01'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
