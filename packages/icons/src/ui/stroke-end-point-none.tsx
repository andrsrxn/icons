import type { Icon } from './types'

export const IconStrokeEndPointNone: Icon = ({
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
      data-slot='icon-ui-stroke-end-point-none'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.3 17.04c.94 0 1.41 0 1.7-.29.3-.3.3-.76.3-1.7v-6.1c0-.94 0-1.4-.3-1.7-.29-.3-.76-.3-1.7-.3H1.7v10.1z'
        fill='currentColor'
      />
      <path
        d='M1.7 17.04h18.6c.94 0 1.41 0 1.7-.29.3-.3.3-.76.3-1.7v-6.1c0-.94 0-1.4-.3-1.7-.29-.3-.76-.3-1.7-.3H1.7'
        stroke='currentColor'
      />
      <path d='M16.17 12h2.5' stroke='currentColor' />
      <path d='M10.07 12h2.5' stroke='currentColor' />
      <path d='M3.7 12h2.5' stroke='currentColor' />
    </svg>
  )
}
