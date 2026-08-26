import type { Icon } from './types'

export const IconSignature: Icon = ({
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
      data-slot='ui-icon-signature'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3.72 20.94c2.03-1.89 4.87-7.63 4.85-11.52-.03-4.87-1.72-6.31-3.29-6.36-1.56-.04-4.03 2.75-1.56 8.68 2.43 5.82 5.59 5.6 6.3 5.32.72-.28 2.83-1.5 2.04-5.32.27 1.75 1 5.04 3.3 4.5 1.84-.44 1.33-3.76.87-5.26.42 1.9 1.35 5.03 3.66 4.69 2.02-.3 1.47-3 1-3.93m-.34 7.21L9.94 20.13'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
