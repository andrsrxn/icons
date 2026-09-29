import type { Icon } from './types'

export const IconSparkleCircle: Icon = ({
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
      data-slot='icon-ui-sparkle-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 22.31a10.31 10.31 0 1 1 0-20.62 10.31 10.31 0 0 1 0 20.62m0-14.96L7.5 12l4.5 4.5 4.57-4.5z'
        fill='currentColor'
      />
      <path d='M5.72 12C8.75 12 12 8.73 12 5.72' stroke='currentColor' />
      <path d='M18.28 12C15.26 12 12 8.74 12 5.72' stroke='currentColor' />
      <path d='M5.72 12C8.73 12 12 15.32 12 18.28' stroke='currentColor' />
      <path d='M18.28 12C15.3 12 12 15.28 12 18.28' stroke='currentColor' />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
    </svg>
  )
}
