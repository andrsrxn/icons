import type { Icon } from './types'

export const IconCrane: Icon = ({
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
      data-slot='crane'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='7.53' y='4.28' width='4.64' height='13.34' rx='2' fill='#000' />
      <path
        d='M12.17 17.27V6.6c0-.3 0-.45-.02-.57a2 2 0 0 0-1.73-1.74l-.57-.01-.58.01a2 2 0 0 0-1.73 1.74l-.01.57v10.67'
        stroke='#000'
        strokeWidth='1.5'
      />
      <rect x='6.19' y='17.27' width='7.32' height='2.57' rx='1' stroke='#000' strokeWidth='1.5' />
      <path
        d='m11.21 4.46 6.47 2.3c2.09.74 3.13 1.11 3.06 1.53s-1.18.41-3.4.41H12.2M8.03 4.77 5 6.88C3.95 7.63 3.42 8 3.53 8.35s.76.35 2.06.35h2.53'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.18 8.98v1.58c0 .55.5.98.93 1.32a1.5 1.5 0 1 1-2.44 1.19m-3.5-4.37H8m4.17 4.4H8'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
