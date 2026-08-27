import type { Icon } from './types'

export const IconFlag: Icon = ({
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
      data-slot='ui-icon-flag'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4.03 5.93c0-.74 0-1.1.21-1.38S4.8 4.2 5.52 4l3-.8c.23-.06.35-.1.48-.1.12 0 .24.03.48.09l4.75 1.11c.2.05.3.07.4.07s.2-.01.4-.05l2.6-.44c1.08-.18 1.63-.28 1.98.02s.36.85.36 1.95v6.12c0 .8 0 1.2-.24 1.48-.23.27-.62.35-1.4.49l-3.34.6c-.18.04-.27.06-.36.06-.1 0-.18-.02-.36-.05l-4.5-.84-.36-.05c-.09 0-.18.01-.36.05l-2.66.48c-1.1.2-1.64.3-2 0s-.36-.86-.36-1.97z'
        fill='currentColor'
      />
      <path
        d='M4.03 4.43s2.31-1.24 5.03-1.24c2.71 0 2.97 1.24 5.67 1.24q.78-.01 1.53-.2c1.96-.49 2.94-.74 3.32-.44.39.3.39 1.13.39 2.77v5.82c0 .57 0 .86-.18 1.11s-.41.35-.88.53c-.96.36-2.51.8-4.4.8-3.2 0-2.8-1.28-5.45-1.28s-5.03 1.29-5.03 1.29m0-12.19v18.97'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
