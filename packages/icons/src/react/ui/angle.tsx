import type { Icon } from './types'

export const IconAngle: Icon = ({
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
      data-slot='ui-icon-angle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.77 20.37h9.79c0-3.56-1.9-6.68-4.74-8.4l-5.05 7.14z'
        fill='currentColor'
      />
      <path
        d='M14.41 3S3.33 17.21 2.77 18.76c-.55 1.54 1.28 1.74 2.24 1.74h16.32'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.23 20.37a9.2 9.2 0 0 0-4.65-8.15'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
