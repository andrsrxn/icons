import type { Icon } from './types'

export const IconKeyboard: Icon = ({
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
      data-slot='keyboard'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.66 9.29c0-1.21 0-1.81.6-2.19.58-.37 1.54-.37 3.45-.37h8.58c1.91 0 2.87 0 3.46.37.6.38.6.98.6 2.19v5.42c0 1.21 0 1.81-.6 2.19s-1.55.37-3.46.37H7.71c-1.91 0-2.87 0-3.46-.37-.6-.38-.6-.98-.6-2.19z'
        fill='currentColor'
      />
      <path
        d='M8.02 14.1h7.96M6.9 10.89a.41.41 0 1 0 0-.82.41.41 0 0 0 0 .82Zm3.4 0a.41.41 0 1 0 0-.82.41.41 0 0 0 0 .82Zm3.39 0a.41.41 0 1 0 0-.82.41.41 0 0 0 0 .82Zm3.4 0a.41.41 0 1 0 0-.82.41.41 0 0 0 0 .82Zm-.76-4.15H7.66c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42v2.54c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h8.68c1.89 0 2.83 0 3.42-.58.58-.59.58-1.53.58-3.42v-2.54c0-1.89 0-2.83-.58-3.42-.59-.58-1.53-.58-3.42-.58Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
