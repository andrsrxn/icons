import type { Icon } from './types'

export const IconKeyboard: Icon = ({
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
      data-slot='icon-ui-keyboard'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'keyboard-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'keyboard-title'}>{title}</title> : null}
      <rect
        opacity='.2'
        width='12.53'
        height='19.09'
        rx='2'
        transform='matrix(0 -1 -1 0 21.54 18.27)'
        fill='currentColor'
      />
      <rect
        width='12.53'
        height='19.09'
        rx='2'
        transform='matrix(0 -1 -1 0 21.54 18.27)'
        stroke='currentColor'
      />
      <path
        d='M6.5 9.85a.5.5 0 1 1-1.01 0 .5.5 0 0 1 1.01 0m-.06 4.3a.5.5 0 1 1-1.01 0 .5.5 0 0 1 1.01 0m4.09-4.3a.5.5 0 1 1-1.02 0 .5.5 0 0 1 1.02 0m4.02 0a.5.5 0 1 1-1.02 0 .5.5 0 0 1 1.02 0m4.02 0a.5.5 0 1 1-1.01 0 .5.5 0 0 1 1.01 0m-.06 4.3a.5.5 0 1 1-1.01 0 .5.5 0 0 1 1.01 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M14.61 14.2H9.45' stroke='currentColor' />
    </svg>
  )
}
