import type { Icon } from './types'

export const IconReplyAll: Icon = ({
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
      data-slot='icon-ui-reply-all'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M6.75 11.4h9.5c3.3 0 5.97 2.68 5.97 5.98' stroke='currentColor' />
      <path
        d='M10.24 6.62 8.28 8.57c-1.33 1.34-2 2-2 2.83s.67 1.5 2 2.83l1.96 1.97'
        stroke='currentColor'
      />
      <path
        d='M5.27 6.54 3.35 8.8c-1.06 1.24-1.59 1.86-1.59 2.6 0 .73.53 1.35 1.58 2.59l1.93 2.27'
        stroke='currentColor'
      />
    </svg>
  )
}
