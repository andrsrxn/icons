import type { Icon } from './types'

export const IconBlocks: Icon = ({
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
      data-slot='icon-ui-blocks'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.63' y='13.75' width='7.83' height='7.83' rx='2' fill='currentColor' />
      <rect opacity='.2' x='2.63' y='5.91' width='7.83' height='7.83' rx='2' fill='currentColor' />
      <rect
        opacity='.2'
        x='10.46'
        y='13.75'
        width='7.83'
        height='7.83'
        rx='2'
        fill='currentColor'
      />
      <rect opacity='.2' x='13.81' y='2.53' width='7.66' height='7.66' rx='2' fill='currentColor' />
      <rect x='2.63' y='13.75' width='7.83' height='7.83' rx='2' stroke='currentColor' />
      <rect x='2.63' y='5.91' width='7.83' height='7.83' rx='2' stroke='currentColor' />
      <rect x='10.46' y='13.75' width='7.83' height='7.83' rx='2' stroke='currentColor' />
      <rect x='13.81' y='2.53' width='7.66' height='7.66' rx='2' stroke='currentColor' />
    </svg>
  )
}
