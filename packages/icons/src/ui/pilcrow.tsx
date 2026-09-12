import type { Icon } from './types'

export const IconPilcrow: Icon = ({
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
      data-slot='icon-ui-pilcrow'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.55 21.33c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7V4.6c0-.95 0-1.42-.3-1.71-.29-.3-.76-.3-1.7-.3h-.81c-.94 0-1.42 0-1.7.3-.3.3-.3.76-.3 1.7v14.73c0 .94 0 1.41.3 1.7.28.3.76.3 1.7.3z'
        fill='currentColor'
      />
      <path
        d='M19.76 2.6H8.68a4.85 4.85 0 0 0-4.86 4.86v.25a4.85 4.85 0 0 0 4.86 4.85h4.3'
        stroke='currentColor'
      />
      <path d='M20 21.33h-9.26' stroke='currentColor' />
      <path d='M13.07 2.7v18.63' stroke='currentColor' />
      <path d='M17.23 2.7v18.63' stroke='currentColor' />
    </svg>
  )
}
