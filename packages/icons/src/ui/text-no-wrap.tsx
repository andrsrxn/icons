import type { Icon } from './types'

export const IconTextNoWrap: Icon = ({
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
      data-slot='icon-ui-text-no-wrap'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M14.35 6H2.81' stroke='currentColor' />
      <path d='M20.98 12H2.8' stroke='currentColor' />
      <path d='M14.35 18H2.81' stroke='currentColor' />
      <path
        d='m19.42 14.7.59-.58c1-1 1.5-1.5 1.5-2.12S21 10.88 20 9.88l-.59-.59'
        stroke='currentColor'
      />
    </svg>
  )
}
