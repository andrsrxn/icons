import type { Icon } from './types'

export const IconFx: Icon = ({
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
      data-slot='icon-ui-fx'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M4.79 7.62v9.24' stroke='currentColor' />
      <path d='M4.79 7.56h5.09' stroke='currentColor' />
      <path d='M4.79 12.52H8.6' stroke='currentColor' />
      <path d='m12.85 16.8 6.36-9.18' stroke='currentColor' />
      <path d='m19.21 16.8-6.36-9.18' stroke='currentColor' />
      <path d='M21.54 20.55H2.46' stroke='currentColor' />
      <path d='M21.54 3.48H2.46' stroke='currentColor' />
    </svg>
  )
}
