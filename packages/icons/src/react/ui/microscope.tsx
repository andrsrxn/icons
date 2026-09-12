import type { Icon } from './types'

export const IconMicroscope: Icon = ({
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
      data-slot='icon-ui-microscope'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        x='10.21'
        y='12.81'
        width='3.99'
        height='7.46'
        rx='1.5'
        transform='rotate(90 10.21 12.8)'
        stroke='currentColor'
      />
      <path
        d='M8.96 12.4V4.18c0-.45 0-.67-.03-.86a2 2 0 0 0-1.6-1.59c-.18-.03-.4-.03-.85-.03s-.66 0-.85.03a2 2 0 0 0-1.59 1.6c-.03.18-.03.4-.03.85v8.22'
        stroke='currentColor'
      />
      <rect
        opacity='.2'
        x='8.96'
        y='1.7'
        width='11.4'
        height='4.84'
        rx='2.42'
        transform='rotate(90 8.96 1.7)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='21.25'
        y='22.01'
        width='8.24'
        height='4.04'
        rx='2.02'
        transform='rotate(-180 21.25 22.01)'
        fill='currentColor'
      />
      <path
        d='M13.26 22.25v-.6c0-1.8 0-2.7.54-3.28l.1-.1c.57-.53 1.47-.53 3.28-.53s2.7 0 3.29.54l.09.09c.54.58.54 1.48.54 3.29v.59'
        stroke='currentColor'
      />
      <path d='M3.4 22.25h17.7' stroke='currentColor' />
      <path d='M9.32 4.87c3.46-.74 7.63 0 9.78 3.25 2 3.05.85 6.6 0 9.34' stroke='currentColor' />
    </svg>
  )
}
