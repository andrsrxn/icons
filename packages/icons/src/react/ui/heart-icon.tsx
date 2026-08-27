import type { Icon } from './types'

export const IconHeartIcon: Icon = ({
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
      data-slot='ui-icon-heart-icon'
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
        d='M2.57 12a9.43 9.43 0 1 0 18.86 0 9.43 9.43 0 0 0-18.86 0m13.24 2.15L12 16.93l-3.93-2.78-1.31-3.8 1.31-2.44 3.93.37 3.55-.56 1.9 2.64z'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='12'
        r='9.43'
        transform='rotate(90 12 12)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.76 7.85A3.5 3.5 0 0 0 12 9.43a3.5 3.5 0 0 0-2.76-1.58c-1.76 0-3.08 2-2.51 4.13.56 2.12 3.93 3.85 5.27 5.37 1.34-1.52 4.7-3.25 5.27-5.37s-.75-4.13-2.51-4.13'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
