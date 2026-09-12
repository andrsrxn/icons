import type { Icon } from './types'

export const IconContactlessPay: Icon = ({
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
      data-slot='icon-ui-contactless-pay'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.75 12a10.25 10.25 0 1 0 20.5 0 10.25 10.25 0 0 0-20.5 0'
        fill='currentColor'
      />
      <path d='M7.18 15.28A5 5 0 0 0 8.24 12a5 5 0 0 0-1.06-3.28' stroke='currentColor' />
      <path
        d='M10.55 17.03A7.7 7.7 0 0 0 12.18 12c0-2.04-.4-3.28-1.63-5.03'
        stroke='currentColor'
      />
      <path
        d='M14.49 18.35A9.7 9.7 0 0 0 16.54 12c0-2.57-.5-4.13-2.05-6.35'
        stroke='currentColor'
      />
      <path d='M1.75 12A10.2 10.2 0 0 0 12 22.25 10.25 10.25 0 1 0 1.75 12' stroke='currentColor' />
    </svg>
  )
}
