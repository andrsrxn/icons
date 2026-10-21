import type { Icon } from './types'

export const IconAvocado: Icon = ({
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
      data-slot='icon-ui-avocado'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m17.8 14.25 4.09-4.02.42-4.85-3.35-3.39H14.3L9.75 6.2a8.06 8.06 0 1 0 8.05 8.06M9.75 18.3a4.04 4.04 0 1 0 0-8.08 4.04 4.04 0 0 0 0 8.08'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M9.75 22.31a8.06 8.06 0 0 0 7.83-6.13 6.6 6.6 0 0 1 1.63-3.28l1.37-1.32a5.74 5.74 0 1 0-8.03-8.19l-1.44 1.44a7 7 0 0 1-3.27 1.6A8.06 8.06 0 0 0 9.75 22.3'
        stroke='currentColor'
      />
      <path d='M5.71 14.25a4.04 4.04 0 1 1 8.08 0 4.04 4.04 0 0 1-8.08 0' stroke='currentColor' />
    </svg>
  )
}
