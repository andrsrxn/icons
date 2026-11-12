import type { Icon } from './types'

export const IconTrainTrack: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-train-track'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M7.27 4.09h9.3l2.97 15.82H4.34z' fill='currentColor' />
      <path d='M4 22.17 7.83 1.83' stroke='currentColor' />
      <path d='M20 22.17 16.17 1.83' stroke='currentColor' />
      <path d='M18.85 4.09H5.15' stroke='currentColor' />
      <path d='M20 9.36H4' stroke='currentColor' />
      <path d='M21.23 14.64H2.77' stroke='currentColor' />
      <path d='M22.56 19.91H1.44' stroke='currentColor' />
    </svg>
  )
}
