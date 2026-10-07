import type { Icon } from './types'

export const IconRelocateRight: Icon = ({
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
      data-slot='icon-ui-relocate-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='8.7'
        height='8.7'
        rx='2'
        transform='matrix(1 0 0 -1 1.82 21.31)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='8.7'
        height='8.7'
        rx='2'
        transform='matrix(1 0 0 -1 13.48 21.31)'
        fill='currentColor'
      />
      <rect
        width='8.7'
        height='8.7'
        rx='2'
        transform='matrix(1 0 0 -1 1.82 21.31)'
        stroke='currentColor'
      />
      <rect
        width='8.7'
        height='8.7'
        rx='2'
        transform='matrix(1 0 0 -1 13.48 21.31)'
        stroke='currentColor'
      />
      <path
        d='M19.95 7.37c-1.3 1.3-1.95 1.95-2.76 1.97h-.07c-.81-.02-1.46-.67-2.77-1.97'
        stroke='currentColor'
      />
      <path
        d='M17.15 8.97V8.3c0-2.44 0-3.66-.67-4.49a3 3 0 0 0-.44-.44c-.83-.67-2.05-.67-4.49-.67h-.24c-2.2 0-3.32 0-4.1.55a3 3 0 0 0-.7.71c-.56.78-.56 1.89-.56 4.1'
        stroke='currentColor'
      />
    </svg>
  )
}
