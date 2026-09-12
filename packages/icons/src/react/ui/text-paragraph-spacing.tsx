import type { Icon } from './types'

export const IconTextParagraphSpacing: Icon = ({
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
      data-slot='icon-ui-text-paragraph-spacing'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.28 3H2.72' stroke='currentColor' />
      <path d='M21.28 21H2.72' stroke='currentColor' />
      <path
        d='m9.3 8.5 1.32-1.25c.65-.62.98-.93 1.38-.93s.72.31 1.37.93l1.34 1.26'
        stroke='currentColor'
      />
      <path d='M12 6.8v5.22' stroke='currentColor' />
      <path d='M12 12.02v5.22' stroke='currentColor' />
      <path
        d='m9.31 15.51 1.31 1.24c.65.62.98.93 1.38.93s.72-.31 1.37-.93l1.32-1.24'
        stroke='currentColor'
      />
    </svg>
  )
}
