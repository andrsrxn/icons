import type { Icon } from './types'

export const IconFunction: Icon = ({
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
      data-slot='function'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.098 18.263c-.393 1.042.432 2.27 1.743 2.27 2.643 0 4.356-3.741 6.106-10.046 1.426-5.137 2.573-7.02 4.144-7.02 1.443 0 2.168.837 2 2.087m-1.826 5.017h-8.64'
      />
    </svg>
  )
}
