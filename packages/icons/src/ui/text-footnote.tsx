import type { Icon } from './types'

export const IconTextFootnote: Icon = ({
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
      data-slot='icon-ui-text-footnote'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M9.6 7.51v13.87' stroke='currentColor' />
      <path d='M11.9 21.38H7.3' stroke='currentColor' />
      <path
        d='M3.98 9.13c0-.9.72-1.62 1.62-1.62h7.99c.9 0 1.62.73 1.62 1.62'
        stroke='currentColor'
      />
      <path
        d='m17.77 3.46.49-.3c.68-.44 1.01-.65 1.27-.51s.26.54.26 1.35v4.68'
        stroke='currentColor'
      />
    </svg>
  )
}
