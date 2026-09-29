import type { Icon } from './types'

export const IconTextSparkle: Icon = ({
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
      data-slot='icon-ui-text-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m18.73 13.86-.9-1.7-.93 1.7-1.75.97 1.75.9.92 2 .9-2 1.91-.99z'
        fill='currentColor'
      />
      <path d='M12 3.75v16.5' stroke='currentColor' />
      <path d='M14.74 20.25H9.26' stroke='currentColor' />
      <path
        d='M18.67 5.67c0-1.06-.86-1.92-1.92-1.92h-9.5c-1.06 0-1.92.86-1.92 1.92'
        stroke='currentColor'
      />
      <path d='M14.74 15c1.55 0 3.2-1.68 3.2-3.21' stroke='currentColor' />
      <path d='M21.16 15c-1.55 0-3.21-1.67-3.21-3.21' stroke='currentColor' />
      <path d='M14.74 15c1.53 0 3.2 1.7 3.2 3.2' stroke='currentColor' />
      <path d='M21.16 15c-1.53 0-3.21 1.67-3.21 3.2' stroke='currentColor' />
    </svg>
  )
}
