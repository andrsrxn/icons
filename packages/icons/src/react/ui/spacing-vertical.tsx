import type { Icon } from './types'

export const IconSpacingVertical: Icon = ({
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
      data-slot='icon-ui-spacing-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M5.8 4.6v14.54' stroke='currentColor' />
      <path
        d='m9.3 16.88-.66.66c-1.33 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-.67-.66'
        stroke='currentColor'
      />
      <path
        d='m9.22 7.04-.58-.58c-1.33-1.34-2-2-2.83-2s-1.5.66-2.83 2l-.59.58'
        stroke='currentColor'
      />
      <path d='M21.36 6h-8.8' stroke='currentColor' />
      <path d='M21.36 12h-8.8' stroke='currentColor' />
      <path d='M21.36 18h-8.8' stroke='currentColor' />
    </svg>
  )
}
