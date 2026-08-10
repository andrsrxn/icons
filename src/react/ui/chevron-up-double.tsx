import type { Icon } from './types'

export const IconChevronUpDouble: Icon = ({
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
      data-slot='chevron-up-double'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M4.42 11.46 9.1 6.52c1.36-1.44 2.04-2.16 2.9-2.16s1.55.72 2.9 2.16l4.69 4.94m-15.16 8 4.67-4.94c1.36-1.44 2.04-2.16 2.9-2.16s1.55.72 2.9 2.16l4.69 4.94'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
