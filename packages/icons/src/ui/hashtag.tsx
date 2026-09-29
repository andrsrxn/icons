import type { Icon } from './types'

export const IconHashtag: Icon = ({
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
      data-slot='icon-ui-hashtag'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M4.01 7.97H22' stroke='currentColor' />
      <path d='M2 15.42h17.99' stroke='currentColor' />
      <path d='m13.82 21 4.66-18' stroke='currentColor' />
      <path d='m5.62 21 4.65-18' stroke='currentColor' />
    </svg>
  )
}
