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
      <path opacity='.2' d='M3.77 16.86h16.61v5.3H3.78z' fill='currentColor' />
      <path
        opacity='.2'
        d='M12 13.08a2.1 2.1 0 0 1-2.1-2.1V8.95a2.1 2.1 0 1 1 4.2 0v2.01a2.1 2.1 0 0 1-2.1 2.1'
        fill='currentColor'
      />
      <path d='M3.77 22.17V10.14a8.3 8.3 0 0 1 16.61 0v12.03' stroke='currentColor' />
      <path d='M20.38 17.1H3.78' stroke='currentColor' />
      <rect
        width='4.62'
        height='7.06'
        rx='2.31'
        transform='matrix(-1 0 0 1 14.31 6.44)'
        stroke='currentColor'
      />
      <path d='M12.03 17.05V13.5' stroke='currentColor' />
      <path d='M12.03 6.38V2.76' stroke='currentColor' />
    </svg>
  )
}
