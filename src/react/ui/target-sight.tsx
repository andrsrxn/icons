import type { Icon } from './types'

export const IconTargetSight: Icon = ({
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
      data-slot='target-sight'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='M14.6 12a2.6 2.6 0 1 1-5.2 0 2.6 2.6 0 0 1 5.2 0' fill='currentColor' />
      <path
        d='M12 6.6V2.86m0 18.28V17.4M6.6 12H2.86m18.28 0H17.4m1.87 0a7.27 7.27 0 1 1-14.54 0 7.27 7.27 0 0 1 14.54 0Zm-4.66 0a2.6 2.6 0 1 1-5.22 0 2.6 2.6 0 0 1 5.22 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
