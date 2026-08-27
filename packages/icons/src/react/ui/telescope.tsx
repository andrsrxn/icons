import type { Icon } from './types'

export const IconTelescope: Icon = ({
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
      data-slot='ui-icon-telescope'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        x='15.78'
        y='4.64'
        width='4.34'
        height='7.54'
        rx='1.5'
        transform='rotate(-15 15.78 4.64)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.69 5.97 6.85 8.34c-.45.12-.68.18-.86.27a2 2 0 0 0-1.1 1.92c0 .2.07.43.19.88s.18.68.27.85a2 2 0 0 0 1.92 1.11c.2 0 .42-.07.88-.2l8.83-2.36'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m4.66 9.85-1.03.28a1.61 1.61 0 0 0 .84 3.11l1.03-.28M10.49 14a1.87 1.87 0 0 0 1.87 1.88A1.87 1.87 0 1 0 10.49 14m.91 1.88-2.76 5.15m4.71-5.15 2.97 5.15'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        opacity='.2'
        x='4.43'
        y='8.99'
        width='12.41'
        height='4.89'
        rx='2.44'
        transform='rotate(-15 4.43 8.99)'
        fill='currentColor'
      />
    </svg>
  )
}
