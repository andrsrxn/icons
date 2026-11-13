import type { Icon } from './types'

export const IconArrowsVerticalLines: Icon = ({
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
      data-slot='icon-ui-arrows-vertical-lines'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M12 5.3v13.4' stroke='currentColor' />
      <path
        d='m15.34 16.36-.5.52c-1.34 1.33-2 2-2.84 2s-1.5-.66-2.83-2l-.51-.52'
        stroke='currentColor'
      />
      <path
        d='m15.34 7.68-.5-.51c-1.34-1.34-2-2-2.84-2s-1.5.66-2.83 2l-.51.51'
        stroke='currentColor'
      />
      <path d='M6.12 1.73h11.76' stroke='currentColor' />
      <path d='M6.12 22.27h11.76' stroke='currentColor' />
    </svg>
  )
}
