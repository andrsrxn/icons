import type { Icon } from './types'

export const IconNavigation: Icon = ({
  size = 24,
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
      data-slot='navigation'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M9.15 19.16 5.12 7.6c-.6-1.7-.89-2.55-.45-3 .45-.43 1.3-.14 3 .45L19.25 9.1c1.04.36 1.56.55 1.57.89 0 .34-.5.56-1.52.98l-5.56 2.3q-.26.11-.35.2c-.08.07-.11.16-.2.36l-2.17 5.38c-.42 1.03-.63 1.55-.98 1.54s-.53-.54-.9-1.6'
        fill='currentColor'
      />
      <path
        d='M9.15 19.16 5.12 7.6c-.6-1.7-.89-2.55-.45-3 .45-.43 1.3-.14 3 .45L19.25 9.1c1.04.36 1.56.55 1.57.89 0 .34-.5.56-1.52.98l-5.56 2.3q-.26.11-.35.2c-.08.07-.11.16-.2.36l-2.17 5.38c-.42 1.03-.63 1.55-.98 1.54s-.53-.54-.9-1.6Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
