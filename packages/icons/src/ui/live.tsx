import type { Icon } from './types'

export const IconLive: Icon = ({
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
      data-slot='icon-ui-live'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M8.11 8.56v6.88' stroke='currentColor' />
      <path d='m10.38 8.56 2.6 6.88' stroke='currentColor' />
      <path d='m15.58 8.56-2.6 6.88' stroke='currentColor' />
      <path d='M2.59 8.56v6.88' stroke='currentColor' />
      <path d='M17.99 8.56v6.88' stroke='currentColor' />
      <path d='M2.59 15.44H5.8' stroke='currentColor' />
      <path d='M17.99 15.44h3.42' stroke='currentColor' />
      <path d='M17.99 8.56h3.42' stroke='currentColor' />
      <path d='M17.99 12h2.55' stroke='currentColor' />
      <path d='M22.32 19.42H1.68' stroke='currentColor' />
      <path d='M22.32 4.57H1.68' stroke='currentColor' />
    </svg>
  )
}
