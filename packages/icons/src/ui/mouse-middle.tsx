import type { Icon } from './types'

export const IconMouseMiddle: Icon = ({
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
      data-slot='icon-ui-mouse-middle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M3.7 16.86h16.6v5.3H3.7z' fill='currentColor' />
      <path
        opacity='.2'
        d='M12 13.05a2.1 2.1 0 0 1-2.1-2.1V8.92a2.1 2.1 0 1 1 4.2 0v2.01a2.1 2.1 0 0 1-2.1 2.1'
        fill='currentColor'
      />
      <path d='M3.7 22.17V10.14a8.3 8.3 0 0 1 16.6 0v12.03' stroke='currentColor' />
      <path d='M20.3 17.1H3.7' stroke='currentColor' />
      <rect
        width='4.62'
        height='7.06'
        rx='2.31'
        transform='matrix(-1 0 0 1 14.31 6.38)'
        stroke='currentColor'
      />
      <path d='M12 17.05V13.5' stroke='currentColor' />
      <path d='M12 6.38V1.83' stroke='currentColor' />
    </svg>
  )
}
