import type { Icon } from './types'

export const IconDiceThree: Icon = ({
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
      data-slot='icon-ui-dice-three'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='18.78'
        height='18.78'
        rx='3'
        transform='matrix(0 -1 -1 0 21.4 21.4)'
        fill='currentColor'
      />
      <rect
        width='18.78'
        height='18.78'
        rx='3'
        transform='matrix(0 -1 -1 0 21.4 21.4)'
        stroke='currentColor'
      />
      <path
        d='M17.7 7.1a.9.9 0 1 1-1.81 0 .9.9 0 0 1 1.81 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M8.02 16.9a.9.9 0 1 1-1.81 0 .9.9 0 0 1 1.81 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.9 12a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
