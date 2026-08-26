import type { Icon } from './types'

export const IconTextParagraphSpacing: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-text-paragraph-spacing'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M21 3H3m18 18H3M9.46 8.35l1.16-1.1c.65-.62.98-.93 1.38-.93s.72.31 1.37.93l1.17 1.1M12 6.8v5.22m0 0v5.22m-2.54-1.59 1.16 1.1c.65.62.98.93 1.38.93s.72-.31 1.37-.93l1.17-1.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
