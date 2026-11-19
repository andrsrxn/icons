import type { Icon } from './types'

export const IconRoad: Icon = ({
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
      data-slot='icon-ui-road'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M21.23 22.02 16.69 1.99H7.3L2.95 22.02z' fill='currentColor' />
      <path d='M21.24 21.68 16.72 2.32' stroke='currentColor' />
      <path d='M7.3 2.32 2.85 21.68' stroke='currentColor' />
      <path d='M12 9.93v4.14' stroke='currentColor' />
      <path d='M12 2.32v3.81' stroke='currentColor' />
      <path d='M12 18.03v3.65' stroke='currentColor' />
    </svg>
  )
}
