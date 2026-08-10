import type { Icon } from './types'

export const IconMerge: Icon = ({
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
      data-slot='merge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m8.52 17.88.65.65c1.33 1.34 2 2 2.83 2s1.5-.66 2.83-2l.65-.65M12 20.54v-5.87m0 0 3-2.85c.62-.58.93-.87 1.1-1.25.16-.38.16-.8.16-1.65v-5.3M12 14.67l-3.01-2.86a4 4 0 0 1-1.09-1.25c-.16-.38-.16-.8-.16-1.65V3.62'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
