import type { Icon } from './types'

export const IconSunUv: Icon = ({
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
      data-slot='icon-ui-sun-uv'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M22.2 11.69H1.8' stroke='currentColor' />
      <path d='M9.85 15.64v4.47a2.22 2.22 0 1 1-4.43 0v-4.47' stroke='currentColor' />
      <path opacity='.2' d='M11.97 11.69h-4.6a4.6 4.6 0 1 1 9.2 0z' fill='currentColor' />
      <path d='M7.36 11.69a4.6 4.6 0 1 1 9.21 0' stroke='currentColor' />
      <path d='M11.96 4.24v-2.6' stroke='currentColor' />
      <path d='m17.84 5.73 1.96-1.96' stroke='currentColor' />
      <path d='M5.98 5.64 4.11 3.77' stroke='currentColor' />
      <path d='m13.46 15.64 2.55 6.73' stroke='currentColor' />
      <path d='m18.56 15.64-2.55 6.73' stroke='currentColor' />
    </svg>
  )
}
