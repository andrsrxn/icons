import type { Icon } from './types'

export const IconDrop: Icon = ({
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
      data-slot='drop'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12 20.25c3.61 0 6.54-2.76 6.54-6.16C18.54 7.98 12 3.43 12 3.43S5.46 7.9 5.46 14.1c0 3.4 2.93 6.16 6.54 6.16'
        fill='currentColor'
      />
      <path
        d='M12 20.25c3.61 0 6.54-2.76 6.54-6.16C18.54 7.98 12 3.43 12 3.43S5.46 7.9 5.46 14.1c0 3.4 2.93 6.16 6.54 6.16Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M15.52 13.62a4.5 4.5 0 0 1-1.04 2.07 4.5 4.5 0 0 1-2.19 1.54'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
