import type { Icon } from './types'

export const IconChairBar: Icon = ({
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
      data-slot='icon-ui-chair-bar'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.24 6.77c0 .6-.5 1.1-1.1 1.1H4.86c-.6 0-1.1-.5-1.1-1.1a4.95 4.95 0 0 1 4.96-4.95h6.57a4.95 4.95 0 0 1 4.95 4.95'
        fill='currentColor'
      />
      <path
        d='M19.68 6.77c0 .6-.5 1.1-1.1 1.1H5.42c-.6 0-1.1-.5-1.1-1.1a4.95 4.95 0 0 1 4.95-4.95h5.46a4.95 4.95 0 0 1 4.95 4.95'
        stroke='currentColor'
      />
      <path d='M8.54 7.87 5.07 22.18' stroke='currentColor' />
      <path d='m15.46 7.87 3.47 14.31' stroke='currentColor' />
      <path d='M6.55 16.78h10.9' stroke='currentColor' />
    </svg>
  )
}
