import type { Icon } from './types'

export const IconDotsVertical: Icon = ({
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
      data-slot='dots-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M12 18a1.252 1.252 0 1 1 0 2.504A1.252 1.252 0 0 1 12 18Zm0-7.252a1.252 1.252 0 1 1 0 2.504 1.252 1.252 0 0 1 0-2.504Zm0-7.252A1.252 1.252 0 1 1 12 6a1.252 1.252 0 0 1 0-2.504Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 18a1.252 1.252 0 1 1 0 2.504A1.252 1.252 0 0 1 12 18Zm0-7.252a1.252 1.252 0 1 1 0 2.504 1.252 1.252 0 0 1 0-2.504Zm0-7.252A1.252 1.252 0 1 1 12 6a1.252 1.252 0 0 1 0-2.504Z'
      />
    </svg>
  )
}
