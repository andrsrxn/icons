import type { Icon } from './types'

export const IconUfo: Icon = ({
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
      data-slot='ui-icon-ufo'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m3.38 11.57 3.69-1.7 5.12 1.7 4.86-1.7 3.5 1.7.53 2.66L12 17.86l-9.25-3.63z'
        fill='currentColor'
      />
      <path
        d='M16.9 9.98c0-2.62-2.2-4.75-4.9-4.75S7.1 7.36 7.1 9.98m9.8.15a8 8 0 0 1-4.9 1.35c-1.8 0-3.45-.25-4.9-1.35'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m7.12 9.85-2.27 1.18c-1.54.8-2.3 1.2-2.34 2.08-.03.87.62 1.27 1.91 2.07A14.3 14.3 0 0 0 12 17.41c3.19 0 5.78-1.11 7.6-2.24 1.29-.8 1.93-1.2 1.9-2.07s-.79-1.27-2.3-2.08l-2.22-1.17'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.27 13.63a.44.44 0 1 1-.87 0 .44.44 0 0 1 .87 0m8.33 0a.44.44 0 1 1-.88 0 .44.44 0 0 1 .87 0m-4.16.67a.44.44 0 1 1-.87 0 .44.44 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m7.1 16.95-1.82 1.82m11.62-1.82 1.82 1.82'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
