import type { Icon } from './types'

export const IconArrowsDown: Icon = ({
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
      data-slot='icon-ui-arrows-down'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m20.14 17.93-.5.5c-1.33 1.33-2 2-2.82 2-.83 0-1.5-.67-2.83-2l-.5-.5'
        stroke='currentColor'
      />
      <path
        d='m10.51 17.93-.5.5c-1.32 1.33-2 2-2.82 2-.83 0-1.5-.67-2.83-2l-.5-.5'
        stroke='currentColor'
      />
      <path d='M16.81 3.54v16.28' stroke='currentColor' />
      <path d='M7.19 3.54v16.28' stroke='currentColor' />
    </svg>
  )
}
