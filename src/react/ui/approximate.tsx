import type { Icon } from './types'

export const IconApproximate: Icon = ({
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
      data-slot='approximate'
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
        d='M3.64 10.324s1.792-1.858 4.644-1.858c2.852 0 5.548 1.858 8.36 1.858 2.814 0 3.717-1.858 3.717-1.858M3.639 15.534s1.793-1.858 4.645-1.858c2.852 0 5.548 1.858 8.36 1.858 2.814 0 3.717-1.858 3.717-1.858'
      />
    </svg>
  )
}
