import type { Icon } from './types'

export const IconHeartHalf: Icon = ({
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
      data-slot='heart-half'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M7.87 4.61c1.9 0 3.35 1.42 3.98 2.31q.1.13.13.23.02.09.02.28v9.62c0 1.08 0 1.62-.28 1.76s-.72-.21-1.62-.9c-2.82-2.18-6.36-4.34-6.36-8.98 0-1.86 1.53-4.32 4.13-4.32'
        fill='currentColor'
      />
      <path
        d='M12 19.57c2.75-2.93 8.26-4.85 8.26-10.64 0-1.86-1.53-4.32-4.13-4.32-2.08 0-3.62 1.7-4.13 2.54-.51-.84-2.05-2.54-4.13-2.54-2.6 0-4.13 2.46-4.13 4.32 0 5.79 5.5 7.71 8.26 10.64m0-12.42v12.42'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
