import type { Icon } from './types'

export const IconRepeat: Icon = ({
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
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-repeat'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'repeat-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'repeat-title'}>{title}</title> : null}
      <path
        d='M3.65 6h12.82c1.47 0 2.21 0 2.79.25A3 3 0 0 1 20.8 7.8c.25.58.25 1.32.25 2.8m-.7 7.4H7.51c-1.46 0-2.19 0-2.76-.25A3 3 0 0 1 3.2 16.2c-.25-.58-.25-1.3-.25-2.77'
        stroke='currentColor'
      />
      <path
        d='m5.3 2.71-.47.46c-1.33 1.33-2 2-2 2.83s.67 1.5 2 2.83l.46.46m13.41 12 .47-.46c1.33-1.33 2-2 2-2.83s-.67-1.5-2-2.83l-.46-.46'
        stroke='currentColor'
      />
    </svg>
  )
}
