import type { Icon } from './types'

export const IconMirrorRound: Icon = ({
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
      data-slot='icon-ui-mirror-round'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M20 9.75a8 8 0 1 0-16 0 8 8 0 0 0 16 0' fill='#000' />
      <path
        d='M20 9.75a8 8 0 1 0-16 0 8 8 0 0 0 16 0M10 5.1 7.36 7.76m7.01-2.3-6.62 6.62M8 22.22h8m-4 0v-4.47'
        stroke='#000'
      />
    </svg>
  )
}
