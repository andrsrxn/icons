import type { Icon } from './types'

export const IconShine: Icon = ({
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
      data-slot='icon-ui-shine'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M2.48 12H8.4' stroke='currentColor' />
      <path d='M15.71 12h5.81' stroke='currentColor' />
      <path d='m6.26 17.79 2.9-2.91' stroke='currentColor' />
      <path d='m14.93 9.12 2.88-2.88' stroke='currentColor' />
      <path d='m17.85 17.8-2.93-2.92' stroke='currentColor' />
      <path d='m9.17 9.12-2.9-2.9' stroke='currentColor' />
      <path d='M12.05 21.5v-5.89' stroke='currentColor' />
      <path d='M12.05 8.34V2.49' stroke='currentColor' />
    </svg>
  )
}
