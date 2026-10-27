import type { Icon } from './types'

export const IconScreenExpandHorizontally: Icon = ({
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
      data-slot='icon-ui-screen-expand-horizontally'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='14.24'
        height='20.53'
        rx='3'
        transform='matrix(0 -1 -1 0 22.27 19.12)'
        fill='currentColor'
      />
      <path
        d='M1.73 16.02v.17a3 3 0 0 0 3.1 2.93h14.51a3 3 0 0 0 2.93-2.93v-.17'
        stroke='currentColor'
      />
      <path d='M1.73 7.98V7.8a3 3 0 0 1 2.93-2.93h14.68a3 3 0 0 1 2.93 3.1' stroke='currentColor' />
      <path d='M19.88 12h-5.4' stroke='currentColor' />
      <path d='M4.12 12h5.44' stroke='currentColor' />
      <path
        d='m18.32 14.7.58-.58c1-1 1.5-1.5 1.5-2.12s-.5-1.12-1.5-2.12l-.58-.59'
        stroke='currentColor'
      />
      <path
        d='m5.68 14.7-.58-.58c-1-1-1.5-1.5-1.5-2.12s.5-1.12 1.5-2.12l.58-.59'
        stroke='currentColor'
      />
    </svg>
  )
}
