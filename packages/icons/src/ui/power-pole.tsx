import type { Icon } from './types'

export const IconPowerPole: Icon = ({
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
      data-slot='icon-ui-power-pole'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M9.43 15.09V6.37' stroke='currentColor' />
      <path d='m5.83 22.29 3.6-7.2' stroke='currentColor' />
      <path d='m4 10.97 5.43-4.6' stroke='currentColor' />
      <path d='m20 10.97-5.43-4.6' stroke='currentColor' />
      <path d='m18.17 22.29-3.6-7.2' stroke='currentColor' />
      <path d='M14.57 15.09V6.37' stroke='currentColor' />
      <path d='M7.57 19.2h8.86' stroke='currentColor' />
      <path d='M4 10.97h5.43' stroke='currentColor' />
      <path d='M20 10.97h-5.43' stroke='currentColor' />
      <path d='M9.43 6.37 12 1.71' stroke='currentColor' />
      <path d='M14.57 6.37 12 1.71' stroke='currentColor' />
      <path d='M9.43 15.09h5.14' stroke='currentColor' />
      <path d='M6.07 13.19v-2.22' stroke='currentColor' />
      <path d='M17.93 13.19v-2.22' stroke='currentColor' />
      <path d='M9.43 10.97h5.14' stroke='currentColor' />
      <path d='M9.43 6.37h5.14' stroke='currentColor' />
    </svg>
  )
}
