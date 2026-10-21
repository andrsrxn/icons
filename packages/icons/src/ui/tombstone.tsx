import type { Icon } from './types'

export const IconTombstone: Icon = ({
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
      data-slot='icon-ui-tombstone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M19.91 21.25V10.66a7.91 7.91 0 1 0-15.83 0v10.59z'
        fill='currentColor'
      />
      <path d='M19.91 21.25V10.66a7.91 7.91 0 1 0-15.83 0v10.59' stroke='currentColor' />
      <path d='M1.68 21.25h20.64' stroke='currentColor' />
      <path d='M9.68 8.72h4.64' stroke='currentColor' />
      <path d='M8.47 12.3h7.07' stroke='currentColor' />
    </svg>
  )
}
