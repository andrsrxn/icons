import type { Icon } from './types'

export const IconLeaf: Icon = ({
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
      data-slot='leaf'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.36 15.38c-3.24 3.05-7.6 2.34-9.48.57-1.68-1.59-2.63-5.88.6-8.93 4.03-3.79 9.5-3.4 11.4-3.12.4.06.7.37.75.76.2 1.83.44 7.22-3.27 10.72'
        fill='currentColor'
      />
      <path
        d='M11.64 11.02c-1.85 1.2-5.64 4.78-6 9.57m10.72-5.2c-3.24 3.04-7.6 2.33-9.48.56-1.68-1.59-2.63-5.88.6-8.93 4.03-3.79 9.5-3.4 11.4-3.12.4.06.7.37.75.76.2 1.83.44 7.22-3.27 10.72'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
