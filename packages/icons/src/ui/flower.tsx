import type { Icon } from './types'

export const IconFlower: Icon = ({
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
      data-slot='icon-ui-flower'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='m2.57 14.98 1.28 3.3 4.1.83 1.41 2.67h5.2l1.6-3.11 3.89-.39 1.89-3.8-1.9-2.74 1.7-2.34-1.7-3.8-4.12-.41-1.14-2.95-5.42-.2-1.4 3.15h-4.1l-1.3 3.86L4 12.01zm7.52-.87a2.91 2.91 0 1 0 4.12-4.12 2.91 2.91 0 0 0-4.12 4.12'
        fill='currentColor'
      />
      <path d='M15.79 5.45a3.79 3.79 0 0 0-7.57 0' stroke='currentColor' />
      <path d='M15.66 18.34a3.66 3.66 0 1 1-7.32 0' stroke='currentColor' />
      <path d='M19.58 12a3.79 3.79 0 1 0-3.79-6.55' stroke='currentColor' />
      <path d='M19.58 12a3.79 3.79 0 1 1-3.79 6.56' stroke='currentColor' />
      <path d='M4.43 12a3.79 3.79 0 0 1 3.79-6.55' stroke='currentColor' />
      <path d='M4.43 12a3.79 3.79 0 0 0 3.79 6.56' stroke='currentColor' />
      <path d='M8.69 12A3.3 3.3 0 0 0 12 15.33 3.31 3.31 0 1 0 8.7 12' stroke='currentColor' />
    </svg>
  )
}
