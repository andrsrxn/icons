import type { Icon } from './types'

export const IconTextClock: Icon = ({
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
      data-slot='icon-ui-text-clock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.32 6H2.6' stroke='currentColor' />
      <path d='M9.32 12H2.6' stroke='currentColor' />
      <path d='M9.32 18H2.6' stroke='currentColor' />
      <circle opacity='.2' cx='17.34' cy='15.16' r='4.31' fill='currentColor' />
      <circle cx='17.34' cy='15.16' r='4.31' stroke='currentColor' />
      <path
        d='m18.46 16.1-.76-.5c-.22-.14-.32-.22-.38-.33q-.07-.13-.06-.5v-1.08'
        stroke='currentColor'
      />
    </svg>
  )
}
