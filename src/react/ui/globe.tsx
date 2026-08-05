import type { Icon } from './types'

export const IconGlobe: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='globe'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M20.425 12a8.425 8.425 0 1 1-16.85 0 8.425 8.425 0 0 1 16.85 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.425 12A8.425 8.425 0 0 1 12 20.425M20.425 12A8.426 8.426 0 0 0 12 3.574M20.425 12H3.575M12 20.425A8.426 8.426 0 0 1 3.574 12M12 20.425c1.78 0 3.222-3.772 3.222-8.425 0-4.653-1.443-8.426-3.222-8.426m0 16.851c-1.78 0-3.222-3.772-3.222-8.425 0-4.653 1.443-8.426 3.222-8.426M3.574 12A8.426 8.426 0 0 1 12 3.574'
      />
    </svg>
  )
}
