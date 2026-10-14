import type { Icon } from './types'

export const IconMouseDown: Icon = ({
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
      data-slot='icon-ui-mouse-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M5.2 14.06h13.6v3.5H5.2z' fill='currentColor' />
      <path d='M5.2 17.34V8.56a6.8 6.8 0 1 1 13.6 0v8.78' stroke='currentColor' />
      <path d='M18.8 14.25H5.2' stroke='currentColor' />
      <rect
        width='3.78'
        height='5.78'
        rx='1.89'
        transform='matrix(-1 0 0 1 13.9 5.53)'
        stroke='currentColor'
      />
      <path d='M12 14.22V11.3' stroke='currentColor' />
      <path d='M12 5.63V1.76' stroke='currentColor' />
      <path
        d='m8.72 20.44 1.38 1.07c.88.67 1.32 1.01 1.83 1.01s.95-.34 1.83-1.01l1.39-1.07'
        stroke='currentColor'
      />
    </svg>
  )
}
