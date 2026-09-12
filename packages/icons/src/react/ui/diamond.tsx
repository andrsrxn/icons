import type { Icon } from './types'

export const IconDiamond: Icon = ({
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
      data-slot='icon-ui-diamond'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m2.5 8.42 2.23-3.8c.57-.96.85-1.44 1.31-1.7.46-.27 1.02-.27 2.14-.27h7.64c1.12 0 1.68 0 2.14.26.46.27.74.75 1.31 1.71l2.23 3.8c.72 1.23 1.08 1.85 1.01 2.5-.07.66-.55 1.19-1.52 2.24l-6.05 6.54c-1.38 1.5-2.06 2.24-2.94 2.24s-1.56-.75-2.94-2.24l-6.05-6.54c-.97-1.05-1.45-1.58-1.52-2.23-.07-.66.29-1.28 1.01-2.5'
        fill='currentColor'
      />
      <path
        d='m2.5 8.42 2.23-3.8c.57-.96.85-1.44 1.31-1.7.46-.27 1.02-.27 2.14-.27h7.64c1.12 0 1.68 0 2.14.26.46.27.74.75 1.31 1.71l2.23 3.8c.72 1.23 1.08 1.85 1.01 2.5-.07.66-.55 1.19-1.52 2.24l-6.05 6.54c-1.38 1.5-2.06 2.24-2.94 2.24s-1.56-.75-2.94-2.24l-6.05-6.54c-.97-1.05-1.45-1.58-1.52-2.23-.07-.66.29-1.28 1.01-2.5'
        stroke='currentColor'
      />
    </svg>
  )
}
