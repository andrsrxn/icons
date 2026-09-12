import type { Icon } from './types'

export const IconMotion: Icon = ({
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
      data-slot='icon-ui-motion'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='15.99' cy='12' r='6.4' fill='currentColor' />
      <circle cx='15.99' cy='12' r='6.4' stroke='currentColor' />
      <path d='M7.55 6.63s-1.82 1.6-1.82 5.47c0 3.75 1.82 5.27 1.82 5.27' stroke='currentColor' />
      <path d='M2.79 7.62s-1.1 1.3-1.1 4.4c0 3.03 1.1 4.25 1.1 4.25' stroke='currentColor' />
    </svg>
  )
}
