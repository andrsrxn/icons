import type { Icon } from './types'

export const IconListUnordered: Icon = ({
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
      data-slot='list-unordered'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M8.66 6h11.6m-11.6 6h11.6m-11.6 6h11.6M5.44 6a.78.78 0 1 1-1.56 0 .78.78 0 0 1 1.56 0Zm0 6a.78.78 0 1 1-1.56 0 .78.78 0 0 1 1.56 0Zm0 6a.78.78 0 1 1-1.56 0 .78.78 0 0 1 1.56 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
