import type { Icon } from './types'

export const IconMorph: Icon = ({
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
      data-slot='icon-ui-morph'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.52 17.79a5.79 5.79 0 1 0-3.88-10.1L9.65 9.3l-4.08-.88C3.24 8.4 1.7 9.67 1.7 12s1.54 3.43 3.87 3.43l4.08-.52 3 1.4a5.8 5.8 0 0 0 3.87 1.48'
        fill='currentColor'
      />
      <path d='M13.92 6.83q1.18-.61 2.6-.62a5.79 5.79 0 1 1-2.6 10.96' stroke='currentColor' />
      <path d='M5.12 15.43a3.43 3.43 0 1 1 0-6.86' stroke='currentColor' />
      <path
        d='M5.04 8.56c2.02 0 2.12 1.06 4.28.86 2.25-.21 3.32-2.1 4.58-2.58'
        stroke='currentColor'
      />
      <path
        d='M5.04 15.42c2.02 0 2.08-1.05 4.23-.85 2.26.21 3.37 1.98 4.6 2.58'
        stroke='currentColor'
      />
    </svg>
  )
}
