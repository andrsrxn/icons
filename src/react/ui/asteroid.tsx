import type { Icon } from './types'

export const IconAsteroid: Icon = ({
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
      data-slot='ui-icon-asteroid'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.6 21.64a5.96 5.96 0 1 0 0-11.92 5.96 5.96 0 0 0 0 11.92m-1.43-8.61q1.6-.3 1.88 1.23c.21 1.17-.17 1.71-1.33 1.82-.9.08-1.55-.1-1.88-1.23-.3-1.04.44-1.66 1.33-1.82'
        fill='currentColor'
      />
      <path
        d='M14.78 15.68q0 5.98-6.07 5.96c-3.35 0-5.78-1.66-6.07-5.96-.25-3.7 1.5-5.52 6.07-5.96 4.2-.41 6.07 2.67 6.07 5.96'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.17 13.03q1.6-.3 1.88 1.23c.21 1.17-.17 1.71-1.33 1.82-.9.08-1.55-.1-1.88-1.23-.3-1.04.44-1.66 1.33-1.82'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M11.71 17.63a.48.48 0 1 1-.95 0 .48.48 0 0 1 .95 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m16.1 7.96 5.6-5.6m-4.12 11.17L21.7 9.4M10.53 6.47l4.11-4.11'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
