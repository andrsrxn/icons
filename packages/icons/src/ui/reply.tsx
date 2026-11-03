import type { Icon } from './types'

export const IconReply: Icon = ({
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
      data-slot='icon-ui-reply'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M3.55 11.4H14.2c3.3 0 5.98 2.68 5.98 5.98' stroke='currentColor' />
      <path
        d='M7.38 6.62 5.42 8.57c-1.33 1.34-2 2-2 2.83s.66 1.5 2 2.83l1.96 1.97'
        stroke='currentColor'
      />
    </svg>
  )
}
