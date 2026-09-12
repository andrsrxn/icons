import type { Icon } from './types'

export const IconBubbles: Icon = ({
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
      data-slot='icon-ui-bubbles'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='7.94' cy='7.9' r='6.16' fill='currentColor' />
      <circle opacity='.2' cx='15.49' cy='18.74' r='3.52' fill='currentColor' />
      <circle opacity='.2' cx='20.16' cy='10.83' r='2.05' fill='currentColor' />
      <circle cx='7.94' cy='7.9' r='6.16' stroke='currentColor' />
      <circle cx='15.49' cy='18.74' r='3.52' stroke='currentColor' />
      <circle cx='20.16' cy='10.83' r='2.05' stroke='currentColor' />
      <path d='M7.66 5.08c-.67.04-1.09.23-1.56.7-.48.48-.67.9-.71 1.57' stroke='currentColor' />
    </svg>
  )
}
