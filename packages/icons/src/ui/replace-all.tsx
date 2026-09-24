import type { Icon } from './types'

export const IconReplaceAll: Icon = ({
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
      data-slot='icon-ui-replace-all'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.53' y='2.53' width='8.32' height='8.32' rx='2' fill='currentColor' />
      <rect
        opacity='.2'
        x='13.15'
        y='13.15'
        width='8.32'
        height='8.32'
        rx='2'
        fill='currentColor'
      />
      <rect x='13.15' y='13.15' width='8.32' height='8.32' rx='2' stroke='currentColor' />
      <path
        d='M18.44 9.57v-1c0-1.88 0-2.83-.59-3.41-.58-.59-1.53-.59-3.41-.59h-.23'
        stroke='currentColor'
      />
      <path
        d='M21.06 8.29c-1.08 1.07-1.61 1.61-2.26 1.7a2 2 0 0 1-.6 0c-.65-.09-1.19-.63-2.27-1.7'
        stroke='currentColor'
      />
      <path
        d='M8.38 10.8c.84 0 1.26 0 1.58-.17q.43-.22.66-.65c.16-.32.16-.74.16-1.59'
        stroke='currentColor'
      />
      <path
        d='M8.4 2.54c.82 0 1.23 0 1.55.16q.45.23.67.67c.16.32.16.73.16 1.56'
        stroke='currentColor'
      />
      <path
        d='M4.89 10.8c-.84 0-1.26 0-1.59-.17a1.5 1.5 0 0 1-.65-.65c-.17-.32-.17-.74-.17-1.59'
        stroke='currentColor'
      />
      <path
        d='M4.89 2.54c-.84 0-1.26 0-1.59.17a1.5 1.5 0 0 0-.65.65c-.17.32-.17.74-.17 1.59'
        stroke='currentColor'
      />
      <path
        d='M10.16 13.9h-.12a2 2 0 0 0-1.95 1.95v3.21a2 2 0 0 0 2.07 1.95'
        stroke='currentColor'
      />
      <path d='M5.3 13.9h-.12a2 2 0 0 0-1.95 1.95v3.21a2 2 0 0 0 2.07 1.95' stroke='currentColor' />
    </svg>
  )
}
