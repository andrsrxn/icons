import type { Icon } from './types'

export const IconTag: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-tag'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.66 19.02c-2-2-3-3-3-4.24s1-2.24 3-4.24l7.1-7.1c.87-.87 1.3-1.3 1.86-1.53.55-.23 1.16-.23 2.39-.23h.35c2.83 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12v.35c0 1.22 0 1.83-.23 2.39-.23.55-.66.98-1.53 1.85l-7.1 7.1c-2 2-3 3-4.25 3-1.24 0-2.24-1-4.24-3z'
        fill='currentColor'
      />
      <path
        d='M4.66 19.02c-2-2-3-3-3-4.24s1-2.24 3-4.24l7.1-7.1c.87-.87 1.3-1.3 1.86-1.53.55-.23 1.16-.23 2.39-.23h.35c2.83 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12v.35c0 1.22 0 1.83-.23 2.39-.23.55-.66.98-1.53 1.85l-7.1 7.1c-2 2-3 3-4.25 3-1.24 0-2.24-1-4.24-3z'
        stroke='currentColor'
      />
      <path
        d='M17.2 6.83a.95.95 0 1 1-1.33 1.34.95.95 0 0 1 1.34-1.34'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M9.04 18.15 5.88 15' stroke='currentColor' />
    </svg>
  )
}
