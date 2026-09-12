import type { Icon } from './types'

export const IconMagnet: Icon = ({
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
      data-slot='icon-ui-magnet'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' fill='currentColor' d='M2.99 3.02h4.3v4.3h-4.3z' />
      <path opacity='.2' fill='currentColor' d='M16.95 3.02h4.3v4.3h-4.3z' />
      <path
        d='M7.6 11.89V4.7c0-.94 0-1.41-.3-1.7-.28-.3-.76-.3-1.7-.3H4.3c-.94 0-1.42 0-1.7.3-.3.29-.3.76-.3 1.7v8.36c0 2.3 1 8.22 9.71 8.22 8.7 0 9.71-6.16 9.71-8.22V4.7c0-.94 0-1.41-.3-1.7-.28-.3-.76-.3-1.7-.3H18.4c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v7.18s0 4.27-4.39 4.27c-4.4 0-4.4-4.27-4.4-4.27'
        stroke='currentColor'
      />
      <path d='M2.29 7.66h5' stroke='currentColor' />
      <path d='M16.48 7.66h5.23' stroke='currentColor' />
    </svg>
  )
}
