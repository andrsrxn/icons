import type { Icon } from './types'

export const IconPen: Icon = ({
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
      data-slot='icon-ui-pen'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='12.84'
        height='6.05'
        rx='1'
        transform='scale(1 -1)rotate(45 24.2 9.65)'
        fill='currentColor'
      />
      <path
        d='M5.39 21.07c1.07-.1 1.6-.14 2.08-.37s.85-.6 1.61-1.36L21.31 7.11A3.13 3.13 0 0 0 16.9 2.7L4.63 14.95a6 6 0 0 0-1.34 1.58c-.22.46-.28.99-.39 2.04l-.16 1.55c-.06.56-.09.84.08 1s.45.15 1 .1z'
        stroke='currentColor'
      />
      <path d='M14.1 14.26 9.75 9.89' stroke='currentColor' />
      <path d='m2.85 21.15-1.14 1.14' stroke='currentColor' />
      <path d='M14.93 4.43a3.96 3.96 0 0 0-5.6 0L6.79 6.96' stroke='currentColor' />
    </svg>
  )
}
