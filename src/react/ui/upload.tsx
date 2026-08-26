import type { Icon } from './types'

export const IconUpload: Icon = ({
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
      data-slot='ui-icon-upload'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.02 13.26h17.96v1.86c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88H9.02c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M3.02 13.26v1.86c0 2.82 0 4.24.88 5.12s2.3.88 5.12.88h5.96c2.82 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-1.86M6.84 7.17l2.33-2.34c1.33-1.33 2-2 2.83-2 .82 0 1.5.67 2.83 2l2.33 2.34M12 14.94V3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
