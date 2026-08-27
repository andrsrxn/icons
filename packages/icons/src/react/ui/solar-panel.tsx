import type { Icon } from './types'

export const IconSolarPanel: Icon = ({
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
      data-slot='ui-icon-solar-panel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.22 11.1H21.1l.27 4.22H2.63zm1.33-7.13h15.17l.23 3.59H4.05z'
        fill='currentColor'
      />
      <path
        d='M3.98 6.63c.34-1.49.5-2.23 1.05-2.67s1.32-.44 2.85-.44h8.38c1.55 0 2.33 0 2.88.45.55.44.71 1.2 1.03 2.72l.91 4.25c.48 2.24.72 3.35.12 4.1s-1.75.74-4.03.74H6.9c-2.31 0-3.47 0-4.07-.76-.6-.75-.34-1.88.17-4.13zm16.28 1.01H4.06m17.02 4.02H2.92M12 15.78V21m2.61 0H9.4m6.36-5.67-1-10.97M8.34 15.33l.98-10.97'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
