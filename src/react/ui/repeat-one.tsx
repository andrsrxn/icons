import type { Icon } from './types'

export const IconRepeatOne: Icon = ({
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
      data-slot='ui-icon-repeat-one'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3.65 6h12.82c1.47 0 2.21 0 2.79.25A3 3 0 0 1 20.8 7.8c.25.58.25 1.32.25 2.8m-.7 7.4H7.51c-1.46 0-2.19 0-2.76-.25A3 3 0 0 1 3.2 16.2c-.25-.58-.25-1.3-.25-2.77'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m5.3 2.71-.47.46c-1.33 1.33-2 2-2 2.83s.67 1.5 2 2.83l.46.46m13.41 12 .47-.46c1.33-1.33 2-2 2-2.83s-.67-1.5-2-2.83l-.46-.46m-8.58-3.54.88-.8c.72-.64 1.07-.96 1.37-.83s.3.61.3 1.58v4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
