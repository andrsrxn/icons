import type { Icon } from './types'

export const IconMouseLeft: Icon = ({
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
      data-slot='icon-ui-mouse-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M3.81 16.86h16.61v5.3H3.82z' fill='currentColor' />
      <path
        opacity='.2'
        d='M12.04 17v-1.6c0-.95-.43-1.85-1.17-2.44q-.73-.61-1.03-1.52l-.16-.55a4 4 0 0 1 .02-2.35l.14-.4a2.6 2.6 0 0 1 1.03-1.35 2.6 2.6 0 0 0 1.17-2.17V2.08a8.46 8.46 0 0 0-8.46 8.46v6.47z'
        fill='currentColor'
      />
      <path d='M3.81 22.17V10.14a8.3 8.3 0 0 1 16.61 0v12.03' stroke='currentColor' />
      <path d='M20.42 17.1H3.82' stroke='currentColor' />
      <rect
        width='4.62'
        height='7.06'
        rx='2.31'
        transform='matrix(-1 0 0 1 14.31 6.44)'
        stroke='currentColor'
      />
      <path d='M12 17.05V13.5' stroke='currentColor' />
      <path d='M12 6.38V1.83' stroke='currentColor' />
    </svg>
  )
}
