import type { Icon } from './types'

export const IconGripVertical: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='grip-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M15.31 5.36a.822.822 0 1 1 0-1.643.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.643.822.822 0 0 1 0 1.644Zm6.62 7.462a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm6.62 7.461a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15.31 5.36a.822.822 0 1 1 0-1.643.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.643.822.822 0 0 1 0 1.644Zm6.62 7.462a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm6.62 7.461a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Z'
      />
    </svg>
  )
}
