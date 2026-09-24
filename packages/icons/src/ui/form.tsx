import type { Icon } from './types'

export const IconForm: Icon = ({
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
      data-slot='icon-ui-form'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='4.73'
        height='18.1'
        rx='1.5'
        transform='matrix(0 -1 -1 0 21.05 10.2)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='4.73'
        height='18.1'
        rx='1.5'
        transform='matrix(0 -1 -1 0 21.05 22.12)'
        fill='currentColor'
      />
      <path d='M15.22 1.88H3.36' stroke='currentColor' />
      <path d='M15.22 13.8H3.36' stroke='currentColor' />
      <rect
        width='4.73'
        height='18.1'
        rx='1.5'
        transform='matrix(0 -1 -1 0 21.05 10.2)'
        stroke='currentColor'
      />
      <rect
        width='4.73'
        height='18.1'
        rx='1.5'
        transform='matrix(0 -1 -1 0 21.05 22.12)'
        stroke='currentColor'
      />
    </svg>
  )
}
