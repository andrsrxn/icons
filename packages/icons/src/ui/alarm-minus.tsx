import type { Icon } from './types'

export const IconAlarmMinus: Icon = ({
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
      data-slot='icon-ui-alarm-minus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='12.64' r='9.76' fill='currentColor' />
      <circle cx='12' cy='12.64' r='9.76' stroke='currentColor' />
      <path d='M22.6 5.16 18.91 1.5' stroke='currentColor' />
      <path d='M1.41 5.16 5.07 1.5' stroke='currentColor' />
      <path d='m2.17 21.59 2.4-2.4' stroke='currentColor' />
      <path d='m21.77 21.53-2.34-2.34' stroke='currentColor' />
      <path d='M7.73 12.64h8.54' stroke='currentColor' />
    </svg>
  )
}
