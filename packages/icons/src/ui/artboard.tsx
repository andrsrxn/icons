import type { Icon } from './types'

export const IconArtboard: Icon = ({
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
      data-slot='icon-ui-artboard'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' fill='currentColor' d='M5.15 5.15h13.7v13.7H5.15z' />
      <path d='M18.88 2v20' stroke='currentColor' />
      <path d='M2 5.32h20' stroke='currentColor' />
      <path d='M2 18.78h20' stroke='currentColor' />
      <path d='M5.15 2v20' stroke='currentColor' />
    </svg>
  )
}
