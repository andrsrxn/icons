import type { Icon } from './types'

export const IconDisc: Icon = ({
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
      data-slot='ui-icon-disc'
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
        d='M2.89 14.44a9.43 9.43 0 1 1 18.22-4.88 9.43 9.43 0 0 1-18.22 4.88m6.21-1.66a3 3 0 1 0 5.8-1.55 3 3 0 0 0-5.8 1.55'
        fill='currentColor'
      />
      <path
        d='M9.56 2.9a9.4 9.4 0 0 0-6.67 11.54A9.43 9.43 0 1 0 9.56 2.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M11.22 9.1a3 3 0 0 0-2.12 3.68 3 3 0 1 0 2.12-3.67M10.39 6a6.2 6.2 0 0 0-4.4 7.61m7.59 4.29a6.2 6.2 0 0 0 4.4-7.62'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
