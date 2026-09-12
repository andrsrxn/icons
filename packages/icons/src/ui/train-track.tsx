import type { Icon } from './types'

export const IconTrainTrack: Icon = ({
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
      data-slot='icon-ui-train-track'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='5.6' y='4.09' width='12.79' height='15.53' rx='2' fill='currentColor' />
      <path d='M5.91 22.35V1.65' stroke='currentColor' />
      <path d='M18.09 22.35V1.65' stroke='currentColor' />
      <path d='M20.52 4.09H3.48' stroke='currentColor' />
      <path d='M20.52 9.36H3.48' stroke='currentColor' />
      <path d='M20.52 14.64H3.48' stroke='currentColor' />
      <path d='M20.52 19.91H3.48' stroke='currentColor' />
    </svg>
  )
}
