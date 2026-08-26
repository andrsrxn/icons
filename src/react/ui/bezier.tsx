import type { Icon } from './types'

export const IconBezier: Icon = ({
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
      data-slot='ui-icon-bezier'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle
        opacity='.2'
        cx='4.99'
        cy='16.14'
        r='2.39'
        transform='rotate(90 5 16.14)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='11.95'
        cy='7.53'
        r='2.39'
        transform='rotate(90 11.95 7.53)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='19.01'
        cy='16.14'
        r='2.39'
        transform='rotate(90 19 16.14)'
        fill='currentColor'
      />
      <circle
        cx='4.99'
        cy='16.14'
        r='2.39'
        transform='rotate(90 5 16.14)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='11.95'
        cy='7.53'
        r='2.39'
        transform='rotate(90 11.95 7.53)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='19.01'
        cy='16.14'
        r='2.39'
        transform='rotate(90 19 16.14)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.56 7.53H2.6m18.8 0h-7.06m-9.39 6c0-2.5 1.78-4.64 4.31-5.54m9.69 5.54c0-2.5-1.78-4.64-4.31-5.54'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
