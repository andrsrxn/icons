import type { Icon } from './types'

export const IconTextOverline: Icon = ({
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
      data-slot='icon-ui-text-overline'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m6.59 21.25 3.53-10.96c.79-2.45 1.18-3.68 1.91-3.67.73 0 1.12 1.22 1.9 3.67h0l3.48 10.96'
        stroke='currentColor'
      />
      <path d='M15.44 15.1H8.56' stroke='currentColor' />
      <path d='M19.46 2.78H4.7' stroke='currentColor' />
    </svg>
  )
}
