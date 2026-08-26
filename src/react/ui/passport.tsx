import type { Icon } from './types'

export const IconPassport: Icon = ({
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
      data-slot='ui-icon-passport'
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
        d='M19 6.76c0-1.88 0-2.82-.59-3.41-.58-.59-1.52-.59-3.41-.59H9c-1.89 0-2.83 0-3.41.59S5 4.88 5 6.76v10.48c0 1.88 0 2.82.59 3.41.58.59 1.52.59 3.41.59h6c1.89 0 2.83 0 3.41-.59s.59-1.53.59-3.41zm-7 3.96a2.5 2.5 0 1 1 0-5.02 2.5 2.5 0 0 1 0 5.02'
        fill='currentColor'
      />
      <rect
        x='5'
        y='2.76'
        width='14'
        height='18.47'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.5 8.21a2.5 2.5 0 0 1-2.5 2.51 2.5 2.5 0 1 1 2.5-2.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.84 11.61a5 5 0 0 0-5.68 0M9 14.63h5.98M9 17.54h5.98'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
