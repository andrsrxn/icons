import type { Icon } from './types'

export const IconCode: Icon = ({
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
      data-slot='icon-ui-code'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'code-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'code-title'}>{title}</title> : null}
      <path
        d='m6 15.48-.65-.65c-1.33-1.33-2-2-2-2.83s.67-1.5 2-2.83L6 8.52m12 6.9.59-.59c1.33-1.33 2-2 2-2.83s-.67-1.5-2-2.83L18 8.58m-3-5.2L9 20.62'
        stroke='currentColor'
      />
    </svg>
  )
}
