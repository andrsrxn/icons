import type { Icon } from './types'

export const IconGamingPad: Icon = ({
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
      data-slot='icon-ui-gaming-pad'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='11.33'
        height='20.75'
        rx='5.67'
        transform='matrix(0 -1 -1 0 22.38 17.67)'
        fill='currentColor'
      />
      <path d='M5.36 12h5.01' stroke='currentColor' />
      <path d='M7.86 14.5v-5' stroke='currentColor' />
      <path
        d='M15.54 13.72a.5.5 0 1 1-.98 0 .5.5 0 0 1 .98 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M18.25 10.28a.5.5 0 1 1-.98 0 .5.5 0 0 1 .98 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <rect
        width='11.33'
        height='20.75'
        rx='5.67'
        transform='matrix(0 -1 -1 0 22.38 17.67)'
        stroke='currentColor'
      />
    </svg>
  )
}
