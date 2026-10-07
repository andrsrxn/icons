import type { Icon } from './types'

export const IconCashier: Icon = ({
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
      data-slot='icon-ui-cashier'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='6.68'
        height='20.4'
        rx='2'
        transform='matrix(0 -1 -1 0 22.2 20.5)'
        fill='currentColor'
      />
      <rect
        width='6.68'
        height='20.4'
        rx='2'
        transform='matrix(0 -1 -1 0 22.2 20.5)'
        stroke='currentColor'
      />
      <path
        d='M19.15 13.83 18.5 9.9c-.26-1.6-.39-2.4-.95-2.88s-1.37-.48-3-.48H9.48c-1.6 0-2.41 0-2.97.47s-.7 1.26-.97 2.85l-.69 3.97'
        stroke='currentColor'
      />
      <path d='M9 9.05h2' stroke='currentColor' />
      <path d='M8.37 11.56h2' stroke='currentColor' />
      <path d='M14.96 6.54V3.49' stroke='currentColor' />
      <path d='M16.65 3.5h-3.38' stroke='currentColor' />
      <path
        d='M12.68 17.17a.68.68 0 1 1-1.36 0 .68.68 0 0 1 1.36 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
