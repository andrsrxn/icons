import type { Icon } from './types'

export const IconEdit: Icon = ({
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
      data-slot='icon-ui-edit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='5.68'
        height='6.36'
        rx='1'
        transform='scale(1 -1)rotate(45 21.2 17.83)'
        fill='currentColor'
      />
      <path
        d='M4.46 22.12c.82 0 1.23 0 1.6-.15.36-.16.65-.45 1.23-1.02L20.86 7.37a5 5 0 0 0 1.17-1.39 2 2 0 0 0 0-1.5 5 5 0 0 0-1.17-1.38 5 5 0 0 0-1.38-1.17 2 2 0 0 0-1.5 0c-.38.16-.72.5-1.4 1.17L3.02 16.67c-.57.58-.86.87-1.01 1.24-.16.36-.16.77-.16 1.59v.62c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3z'
        stroke='currentColor'
      />
      <path d='M19.03 9.06 14.87 4.9' stroke='currentColor' />
      <path d='M5.08 22.12H21.7' stroke='currentColor' />
    </svg>
  )
}
