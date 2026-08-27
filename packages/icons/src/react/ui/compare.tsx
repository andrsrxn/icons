import type { Icon } from './types'

export const IconCompare: Icon = ({
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
      data-slot='ui-icon-compare'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.77'
        y='5.29'
        width='18.72'
        height='13.42'
        rx='3'
        fill='currentColor'
      />
      <path
        d='M11.56 5.29h-2.8c-2.82 0-4.24 0-5.12.88-.87.87-.87 2.29-.87 5.12v1.42c0 2.83 0 4.25.87 5.12.88.88 2.3.88 5.13.88h2.8m3.07-13.42h1.62m4.97 8.2v-2.93m0-3.6c0-.92-.75-1.67-1.67-1.67h-.4m2.07 11.74c0 .93-.75 1.68-1.67 1.68h-.4m-4.52.04h1.62m-4.7-15.7v17.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
