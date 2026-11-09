import type { Icon } from './types'

export const IconHashtag: Icon = ({
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
      data-slot='icon-ui-hashtag'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M4.44 8.19h17.02' stroke='currentColor' />
      <path d='M2.54 15.24h17.02' stroke='currentColor' />
      <path d='m13.72 20.52 4.4-17.04' stroke='currentColor' />
      <path d='m5.96 20.52 4.4-17.04' stroke='currentColor' />
    </svg>
  )
}
