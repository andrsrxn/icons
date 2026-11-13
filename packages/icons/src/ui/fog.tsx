import type { Icon } from './types'

export const IconFog: Icon = ({
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
      data-slot='icon-ui-fog'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M2.45 5.82h9.76' stroke='currentColor' />
      <path d='M5.11 11.93h13.87' stroke='currentColor' />
      <path d='M21.55 18.18H11.5' stroke='currentColor' />
      <path d='M16.42 5.82h2.72' stroke='currentColor' />
      <path d='M7.68 18.18H4.87' stroke='currentColor' />
    </svg>
  )
}
