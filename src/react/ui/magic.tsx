import type { Icon } from './types'

export const IconMagic: Icon = ({
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
      data-slot='magic'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12 3.54s.47 4.36 2.29 6.17C16.1 11.53 20.46 12 20.46 12s-4.36.47-6.17 2.29C12.47 16.1 12 20.46 12 20.46s-.47-4.36-2.29-6.17C7.9 12.47 3.54 12 3.54 12s4.36-.47 6.17-2.29C11.53 7.9 12 3.54 12 3.54'
        fill='currentColor'
      />
      <path
        d='M12 3.54s.47 4.36 2.29 6.17C16.1 11.53 20.46 12 20.46 12s-4.36.47-6.17 2.29C12.47 16.1 12 20.46 12 20.46s-.47-4.36-2.29-6.17C7.9 12.47 3.54 12 3.54 12s4.36-.47 6.17-2.29C11.53 7.9 12 3.54 12 3.54Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
