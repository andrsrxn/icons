import type { Icon } from './types'

export const IconHeartHalf: Icon = ({
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
      data-slot='ui-icon-heart-half'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12 18.14V7.1q0-.2-.02-.3l-.14-.22C11.12 5.6 9.42 4 7.13 4c-3.11 0-5.45 3.55-4.44 7.3.78 2.94 4.61 5.45 7.37 7.69.91.74 1.37 1.12 1.65.98.29-.14.29-.7.29-1.84'
        fill='currentColor'
      />
      <path
        d='M16.87 4.01a5.8 5.8 0 0 0-3.83 1.6c-.57.51-.85.77-1.04.77s-.47-.26-1.04-.77a5.8 5.8 0 0 0-3.83-1.6c-3.11 0-5.45 3.55-4.44 7.3.9 3.38 5.82 6.2 8.51 8.67.4.37.6.56.8.56s.4-.19.8-.56c2.69-2.48 7.6-5.3 8.51-8.67 1-3.75-1.33-7.3-4.44-7.3M12 6.53V20.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
