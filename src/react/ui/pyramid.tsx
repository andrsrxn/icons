import type { Icon } from './types'

export const IconPyramid: Icon = ({
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
      data-slot='pyramid'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='M12 20.77V3.2l7.76 11.77z' fill='currentColor' />
      <path
        d='M12 20.52V3.49M9.44 6.27 5.6 12.58c-.65 1.07-.97 1.6-.88 2.16.1.56.59.95 1.56 1.74l3.84 3.1c.9.72 1.35 1.09 1.88 1.09s.98-.37 1.88-1.1l3.84-3.1c.97-.78 1.46-1.17 1.56-1.73.1-.55-.23-1.09-.88-2.16l-3.84-6.3c-1.14-1.9-1.72-2.84-2.56-2.84s-1.42.95-2.56 2.83Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
