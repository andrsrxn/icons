import type { Icon } from './types'

export const IconScissors: Icon = ({
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
      data-slot='scissors'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M9.395 6.726a2.698 2.698 0 1 1-5.395 0 2.698 2.698 0 0 1 5.395 0Zm0 10.548a2.698 2.698 0 1 1-5.395 0 2.698 2.698 0 0 1 5.395 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.875 15.591 20 6.502M8.875 8.408 20 17.499M9.395 6.727a2.698 2.698 0 1 1-5.395 0 2.698 2.698 0 0 1 5.395 0Zm0 10.548a2.698 2.698 0 1 1-5.395 0 2.698 2.698 0 0 1 5.395 0Z'
      />
    </svg>
  )
}
