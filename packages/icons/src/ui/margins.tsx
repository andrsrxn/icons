import type { Icon } from './types'

export const IconMargins: Icon = ({
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
      data-slot='icon-ui-margins'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.22 2.95v17.77h-.46c-1.89 0-2.83 0-3.41-.59-.6-.58-.6-1.53-.6-3.41V6.95c0-1.88 0-2.83.6-3.41.58-.59 1.52-.59 3.4-.59z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M16.78 2.95v17.77h.46c1.89 0 2.83 0 3.41-.59.6-.58.6-1.53.6-3.41V6.95c0-1.88 0-2.83-.6-3.41-.58-.59-1.52-.59-3.4-.59z'
        fill='currentColor'
      />
      <path opacity='.2' d='M7.22 7.14h9.56V2.95H7.22z' fill='currentColor' />
      <path opacity='.2' d='M7.22 21.24h9.56v-4.19H7.22z' fill='currentColor' />
      <rect
        width='18.48'
        height='18.48'
        rx='3'
        transform='scale(1 -1)rotate(90 21.24 0)'
        stroke='currentColor'
      />
      <path d='M21 7.14H3' stroke='currentColor' />
      <path d='M21 16.76H3' stroke='currentColor' />
      <path d='M7.22 2.95v18' stroke='currentColor' />
      <path d='M16.78 2.95v18' stroke='currentColor' />
    </svg>
  )
}
