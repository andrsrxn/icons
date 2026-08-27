import type { Icon } from './types'

export const IconGlobeLock: Icon = ({
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
      data-slot='ui-icon-globe-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12 21.43a9.43 9.43 0 1 1 8.32-4.98s-.32-1.59-2-1.59l-2.09 2.8-.34 2.8c-1.38.8-2.18.97-3.89.97'
        fill='currentColor'
      />
      <path
        d='M12 21.43A9.43 9.43 0 1 1 21.43 12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12 21.43c-2.2 0-4-4.22-4-9.43s1.8-9.43 4-9.43S16 6.8 16 12M2.57 12h18.86'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='15.61'
        y='17.33'
        width='5.82'
        height='4.34'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M20.16 17.33 20 16.1a1.48 1.48 0 0 0-2.94-.02l-.16 1.24'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
