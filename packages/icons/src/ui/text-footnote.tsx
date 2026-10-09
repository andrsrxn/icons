import type { Icon } from './types'

export const IconTextFootnote: Icon = ({
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
      data-slot='icon-ui-text-footnote'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M9.6 7.51v13.87' stroke='currentColor' />
      <path d='M11.9 21.38H7.3' stroke='currentColor' />
      <path
        d='M15.2 9.13c0-.9-.72-1.62-1.61-1.62h-8c-.89 0-1.61.73-1.61 1.62'
        stroke='currentColor'
      />
      <path
        d='m17.1 4.6 1.25-1.15c.72-.65 1.07-.98 1.37-.85s.3.62.3 1.59v4.23'
        stroke='currentColor'
      />
    </svg>
  )
}
