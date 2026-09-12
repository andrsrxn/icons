import type { Icon } from './types'

export const IconPencil: Icon = ({
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
      data-slot='icon-ui-pencil'
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
        transform='scale(1 -1)rotate(45 21.26 17.8)'
        fill='currentColor'
      />
      <path
        d='M4.46 22.18c.81 0 1.22 0 1.59-.16.37-.15.66-.44 1.23-1.02L20.86 7.42c.68-.67 1.01-1 1.17-1.38a2 2 0 0 0 0-1.5c-.16-.38-.5-.72-1.17-1.39s-1-1.01-1.39-1.16a2 2 0 0 0-1.5 0c-.37.15-.7.49-1.38 1.16L3 16.73c-.58.58-.87.87-1.02 1.23-.15.37-.15.78-.15 1.6v.62c0 .94 0 1.41.29 1.7.3.3.76.3 1.7.3z'
        stroke='currentColor'
      />
      <path d='M18.97 9.05 14.92 5' stroke='currentColor' />
    </svg>
  )
}
