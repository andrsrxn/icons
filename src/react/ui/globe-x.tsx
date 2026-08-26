import type { Icon } from './types'

export const IconGlobeX: Icon = ({
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
      data-slot='ui-icon-globe-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='9.43'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <path
        d='M12 21.43A9.43 9.43 0 1 1 21.43 12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12 21.43c-2.2 0-4-4.22-4-9.43s1.8-9.43 4-9.43S16 6.8 16 12M2.57 12h18.86m-5.66 3.76 5.94 5.94m-5.94 0 5.94-5.94'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
