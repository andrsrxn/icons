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
        d='M4.66 19.02c-2-2-3-3-3-4.24s1-2.24 3-4.24l6.76-6.76c1.03-1.03 1.55-1.55 2.21-1.77.67-.23 1.4-.13 2.84.07l.31.04c2.17.3 3.26.45 3.97 1.16.71.72.86 1.8 1.16 3.97l.04.3c.2 1.46.3 2.18.08 2.85-.23.67-.75 1.18-1.78 2.22l-6.76 6.75c-2 2-3 3-4.24 3s-2.24-1-4.24-3z'
        fill='currentColor'
      />
      <path
        d='M4.66 19.02c-2-2-3-3-3-4.24s1-2.24 3-4.24l7.03-7.03c.9-.9 1.36-1.36 1.93-1.59.58-.22 1.21-.2 2.49-.17h.29c2.64.08 3.96.12 4.8.95.84.82.9 2.14 1.02 4.78l.02.39c.06 1.3.09 1.95-.14 2.54s-.7 1.05-1.62 1.97l-6.99 7c-2 2-3 3-4.24 3s-2.24-1-4.24-3z'
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
