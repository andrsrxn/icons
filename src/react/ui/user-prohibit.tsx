import type { Icon } from './types'

export const IconUserProhibit: Icon = ({
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
      data-slot='user-prohibit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <g opacity='.2'>
        <path d='M16.8 8.26a4.8 4.8 0 1 1-9.6 0 4.8 4.8 0 0 1 9.6 0' fill='currentColor' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4.59 19.55A7.6 7.6 0 0 1 12 13.07a7.6 7.6 0 0 1 5.75 2.74c-1.15.27-2.18 1.16-2.18 2.4 0 .91.62 1.86 1.32 2.34H5.52c-.55 0-1-.45-.93-1'
          fill='currentColor'
        />
      </g>
      <path
        d='M12 13.07a4.8 4.8 0 1 0 0-9.62 4.8 4.8 0 0 0 0 9.62Zm0 0a7.54 7.54 0 0 0-7.48 7.48M12 13.07q1.31 0 2.52.46m5.03 6.02-3.5-3.5m4.63 1.86a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
