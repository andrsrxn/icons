import type { Icon } from './types'

export const IconSuperscript: Icon = ({
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
      data-slot='icon-ui-superscript'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M16.98 5.64c.47-.5.92-.89 1.87-.89 1.7 0 1.97 1.76 1.12 2.64-.47.5-1.5 1.24-2.34 1.95-.44.37-.66.56-.54.89s.44.33 1.08.33h2.27'
        stroke='currentColor'
      />
      <path d='M3.56 18.04 13.95 7.65' stroke='currentColor' />
      <path d='M13.95 18.05 3.55 7.65' stroke='currentColor' />
    </svg>
  )
}
