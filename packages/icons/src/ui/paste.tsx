import type { Icon } from './types'

export const IconPaste: Icon = ({
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
      data-slot='icon-ui-paste'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.62 22.28c-1.88 0-2.83 0-3.41-.59-.59-.58-.59-1.53-.59-3.41V5.52c0-1.03.84-1.87 1.87-1.87h.37c.5 0 .95.3 1.16.74.17.36.49.62.87.7l2.72.65c.35.09.52.13.7.14.18 0 .35-.01.7-.06l2.28-.27c.52-.07.96-.44 1.1-.94.18-.57.7-.96 1.28-.96h.43c1.05 0 1.9.85 1.9 1.9v12.73c0 1.88 0 2.83-.59 3.41s-1.53.59-3.41.59z'
        fill='currentColor'
      />
      <path
        d='M16.2 3.65h.44c1.3 0 2.36 1.06 2.36 2.36M6.6 3.65a3 3 0 0 0-2.98 2.98v9.65c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h7.1A2.27 2.27 0 0 0 19 20'
        stroke='currentColor'
      />
      <path
        d='m18.07 17.24 1.1-1.1c1.33-1.33 2-2 2-2.83s-.67-1.5-2-2.83l-1.1-1.1'
        stroke='currentColor'
      />
      <rect
        x='6.64'
        y='5.59'
        width='3.87'
        height='9.33'
        rx='1'
        transform='rotate(-90 6.64 5.59)'
        stroke='currentColor'
      />
      <path d='M11.42 13.3h9.41' stroke='currentColor' />
    </svg>
  )
}
