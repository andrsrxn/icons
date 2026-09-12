import type { Icon } from './types'

export const IconRainbow: Icon = ({
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
      data-slot='icon-ui-rainbow'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M12.1 16.74H1.9a10.22 10.22 0 1 1 20.44 0z' fill='#000' />
      <path d='M22.33 16.74a10.33 10.33 0 1 0-20.66 0' stroke='#000' />
      <path d='M18.97 16.74a6.97 6.97 0 1 0-13.94 0' stroke='#000' />
      <path d='M15.63 16.74a3.63 3.63 0 1 0-7.26 0' stroke='#000' />
    </svg>
  )
}
