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
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
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
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.656 6h11.609M8.656 12h11.609M8.656 18h11.609M5.44 6a.779.779 0 1 1-1.558 0A.779.779 0 0 1 5.44 6Zm0 6.004a.779.779 0 1 1-1.558 0 .779.779 0 0 1 1.558 0Zm0 6.003a.779.779 0 1 1-1.558 0 .779.779 0 0 1 1.558 0Z'
      />
    </svg>
  )
}
