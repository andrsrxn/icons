import type { Icon } from './types'

export const IconSpinner: Icon = ({
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
      data-slot='icon-ui-spinner'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M1.78 12h3.96' stroke='currentColor' />
      <path d='M18.14 12h4.08' stroke='currentColor' />
      <path d='M12 22.3v-3.81' stroke='currentColor' />
      <path d='M11.95 5.6V1.75' stroke='currentColor' />
      <path d='m17 6.95 2.72-2.72' stroke='currentColor' />
      <path d='m4.2 19.76 2.72-2.73' stroke='currentColor' />
      <path d='M6.9 6.95 4.2 4.23' stroke='currentColor' />
      <path d='m19.72 19.76-2.73-2.73' stroke='currentColor' />
    </svg>
  )
}
