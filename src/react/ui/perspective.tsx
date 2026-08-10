import type { Icon } from './types'

export const IconPerspective: Icon = ({
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
      data-slot='perspective'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4 10.74c0-1.66 0-2.49.49-3.05.49-.57 1.31-.68 2.95-.91l8-1.13c2.12-.3 3.18-.46 3.87.14S20 7.46 20 9.61v4.77c0 2.15 0 3.22-.7 3.82-.68.6-1.74.45-3.87.14l-8-1.15c-1.64-.24-2.45-.36-2.94-.92S4 14.87 4 13.23z'
        fill='currentColor'
      />
      <path
        d='M4 10.8c0-1.65 0-2.47.49-3.04.48-.56 1.3-.68 2.93-.92l8-1.17c2.13-.31 3.2-.47 3.89.13S20 7.48 20 9.63v4.75c0 2.15 0 3.22-.7 3.82-.68.6-1.74.45-3.87.14l-8-1.15c-1.64-.24-2.45-.36-2.94-.92S4 14.87 4 13.23z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
