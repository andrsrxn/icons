import type { Icon } from './types'

export const IconListUnordered: Icon = ({
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
      data-slot='icon-ui-list-unordered'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.27 6H7.6' stroke='currentColor' />
      <path d='M21.27 12H7.6' stroke='currentColor' />
      <path d='M21.27 18H7.6' stroke='currentColor' />
      <path
        d='M4 12a.66.66 0 1 1-1.32 0A.66.66 0 0 1 4 12'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M4 6a.66.66 0 1 1-1.32 0A.66.66 0 0 1 4 6'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M4 18a.66.66 0 1 1-1.32 0A.66.66 0 0 1 4 18'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
