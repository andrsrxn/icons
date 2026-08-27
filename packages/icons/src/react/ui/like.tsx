import type { Icon } from './types'

export const IconLike: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-like'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.97'
        y='20.27'
        width='10.1'
        height='4.97'
        rx='1'
        transform='rotate(-90 2.97 20.27)'
        fill='currentColor'
      />
      <path
        d='M14.02 20.42H6.74c-1.88 0-2.82 0-3.4-.59-.6-.58-.6-1.53-.6-3.41v-2.54c0-1.89 0-2.83.6-3.42.58-.58 1.52-.58 3.4-.58H8s1.13-1.77 1.47-3q.2-.74.27-1.48c.1-.9.16-1.37.49-1.62.32-.26.66-.22 1.34-.14.8.1 1.67.39 2.09 1.11.46.8.5 1.92.39 2.96-.15 1.36-.22 2.05.07 2.37l.02.02c.3.32.9.32 2.1.32 2.73 0 4.1 0 4.69.89l.02.04c.57.9.03 2.14-1.06 4.64l-.36.83c-.77 1.74-1.15 2.62-1.9 3.1-.74.5-1.7.5-3.6.5M7.94 10.03v10.39'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
