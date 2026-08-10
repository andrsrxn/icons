import type { Icon } from './types'

export const IconPanelsRight: Icon = ({
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
      data-slot='panels-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M20 8c0-1.89 0-2.83-.59-3.41C18.83 4 17.9 4 16 4h-4v16h4c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41z'
        fill='currentColor'
      />
      <path
        d='M12 20h4c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41V8c0-1.89 0-2.83-.59-3.41C18.83 4 17.9 4 16 4H8c-1.89 0-2.83 0-3.41.59C4 5.17 4 6.1 4 8v8c0 1.89 0 2.83.59 3.41C5.17 20 6.1 20 8 20zm0-16v16'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
