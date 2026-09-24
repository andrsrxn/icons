import type { Icon } from './types'

export const IconSubscript: Icon = ({
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
      data-slot='icon-ui-subscript'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M16.98 13.38c.47-.5.92-.9 1.87-.9 1.7 0 1.97 1.77 1.12 2.65-.47.5-1.5 1.23-2.34 1.94-.44.38-.66.57-.54.9.12.32.44.32 1.08.32h2.27'
        stroke='currentColor'
      />
      <path d='M3.56 16.34 13.95 5.95' stroke='currentColor' />
      <path d='M13.95 16.35 3.55 5.96' stroke='currentColor' />
    </svg>
  )
}
