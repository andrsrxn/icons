import type { Icon } from './types'

export const IconMountain: Icon = ({
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
      data-slot='ui-icon-mountain'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6.59 8.73h5.44l2.35.84 3.08-.84 3.04 11.82H3.57z'
        fill='currentColor'
      />
      <path
        d='M12 2.43c4.4 0 6.98 8.69 8.18 14.23.43 2.01.65 3.02.05 3.76s-1.67.74-3.81.74H7.76c-2.21 0-3.32 0-3.92-.76-.6-.77-.34-1.8.17-3.88C5.4 10.97 8.14 2.43 12 2.43'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.19 8.73S15.59 10 14.17 10c-1.58 0-2.5-1.5-4.06-1.5-1.73 0-3.73 1.15-3.73 1.15'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
