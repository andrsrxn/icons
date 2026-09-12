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
      <rect
        opacity='.2'
        x='4.13'
        y='4.13'
        width='15.74'
        height='15.74'
        rx='2'
        fill='currentColor'
      />
      <path d='M19.87 2v20' stroke='currentColor' />
      <path d='M2 4.13h20' stroke='currentColor' />
      <path d='M2 19.87h20' stroke='currentColor' />
      <path d='M4.13 2v20' stroke='currentColor' />
    </svg>
  )
}
