import type { Icon } from './types'

export const IconWarningDiamond: Icon = ({
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
      data-slot='ui-icon-warning-diamond'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M9.14 4.56C10.5 3.18 11.16 2.5 12 2.5s1.51.68 2.86 2.06l2.27 2.31 2.31 2.27c1.38 1.35 2.06 2.02 2.06 2.86s-.68 1.51-2.06 2.86l-2.31 2.27-2.27 2.31C13.5 20.82 12.84 21.5 12 21.5s-1.51-.68-2.86-2.06l-2.27-2.31-2.31-2.27C3.18 13.5 2.5 12.84 2.5 12s.68-1.51 2.06-2.86l2.31-2.27z'
        fill='currentColor'
      />
      <path
        d='M9.14 4.56C10.5 3.18 11.16 2.5 12 2.5s1.51.68 2.86 2.06l2.27 2.31 2.31 2.27c1.38 1.35 2.06 2.02 2.06 2.86s-.68 1.51-2.06 2.86l-2.31 2.27-2.27 2.31C13.5 20.82 12.84 21.5 12 21.5s-1.51-.68-2.86-2.06l-2.27-2.31-2.31-2.27C3.18 13.5 2.5 12.84 2.5 12s.68-1.51 2.06-2.86l2.31-2.27zM12 7.38v5.12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.53 16.09a.53.53 0 1 1-1.06 0 .53.53 0 0 1 1.06 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
