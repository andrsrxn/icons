import type { Icon } from './types'

export const IconOilBarrel: Icon = ({
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
      data-slot='ui-icon-oil-barrel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M13.25 11.14a1.25 1.25 0 0 1-2.5 0c0-.46.54-1.15.91-1.58.18-.2.5-.2.68 0 .37.43.9 1.12.9 1.58M5.39 13.5l6.61 1 6.42-1v6.68L12 21.68l-6.61-1.5z'
        fill='currentColor'
      />
      <ellipse opacity='.2' cx='12' cy='4.93' rx='7.43' ry='2.29' fill='currentColor' />
      <ellipse
        cx='12'
        cy='4.93'
        rx='7.43'
        ry='2.29'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M19.43 12.45C19.43 13.86 16.1 15 12 15s-7.43-1.14-7.43-2.55m14.86 6.45c0 1.41-3.33 2.55-7.43 2.55s-7.43-1.14-7.43-2.54M5.39 6.2v13.72M18.42 6.2v13.72'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.5 11.39a1.5 1.5 0 0 1-3 0c0-.44.43-1.09.83-1.59.29-.35.43-.53.67-.53s.38.18.67.53c.4.5.83 1.15.83 1.59'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
