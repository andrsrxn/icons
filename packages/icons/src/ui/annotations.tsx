import type { Icon } from './types'

export const IconAnnotations: Icon = ({
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
      data-slot='icon-ui-annotations'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.32 17.43c.9 0 1.36 0 1.73-.1a3 3 0 0 0 2.15-2.14c.1-.37.1-.82.1-1.73V9.72c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.7c-2.82 0-4.24 0-5.12.88S1.7 6.9 1.7 9.72v3.74c0 .9 0 1.36.1 1.73a3 3 0 0 0 2.15 2.15c.37.1.82.1 1.73.1h.56a3 3 0 0 1 1.6.63l1.98 1.29c1.06.68 1.59 1.03 2.18 1.03s1.12-.35 2.18-1.03l1.98-1.29.48-.3a3 3 0 0 1 1.12-.32c.13-.02.28-.02.56-.02'
        fill='currentColor'
      />
      <path
        d='M17.88 17.43c1.32 0 1.98 0 2.5-.2a3 3 0 0 0 1.71-1.71c.2-.53.2-1.18.2-2.5v-3.3c0-2.83 0-4.24-.87-5.12-.88-.88-2.3-.88-5.12-.88H7.7c-2.82 0-4.24 0-5.12.88S1.7 6.9 1.7 9.72v3.25c0 1.36 0 2.05.22 2.59a3 3 0 0 0 1.66 1.66c.54.21 1.22.21 2.59.21.63 0 .94 0 1.24.06a3 3 0 0 1 1.16.51c.24.18.46.41.88.87l.15.16c.88.96 1.32 1.44 1.85 1.6a2 2 0 0 0 1.12 0c.53-.14.97-.62 1.87-1.56l.24-.26c.41-.43.62-.65.85-.82a3 3 0 0 1 1.18-.5c.28-.06.58-.06 1.17-.06'
        stroke='currentColor'
      />
      <path d='M6 9.08h12' stroke='currentColor' />
      <path d='M7.84 13.1h8.32' stroke='currentColor' />
    </svg>
  )
}
