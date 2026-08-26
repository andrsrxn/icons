import type { Icon } from './types'

export const IconChevronUpDouble: Icon = ({
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
      data-slot='ui-icon-chevron-up-double'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m19.84 19.57-5-5.01c-1.34-1.34-2-2-2.83-2s-1.5.66-2.83 2l-5.02 5.01m15.68-7.85-5-5.01c-1.34-1.34-2-2-2.83-2s-1.5.66-2.83 2l-5.02 5.01'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
