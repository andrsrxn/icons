import type { Icon } from './types'

export const IconLuggage: Icon = ({
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
      data-slot='icon-ui-luggage'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='5.22'
        y='7.41'
        width='13.56'
        height='13.56'
        rx='2'
        fill='currentColor'
      />
      <rect x='5.22' y='7.41' width='13.56' height='13.56' rx='2' stroke='currentColor' />
      <path d='M9.29 7.16V1.73' stroke='currentColor' />
      <path d='M9.98 16.65v-5.43' stroke='currentColor' />
      <path d='M7.93 22.75v-1.78' stroke='currentColor' />
      <path d='M14.71 7.16V1.73' stroke='currentColor' />
      <path d='M14.02 16.65v-5.43' stroke='currentColor' />
      <path d='M16.07 22.75v-1.78' stroke='currentColor' />
      <path d='M17.42 1.73H6.58' stroke='currentColor' />
    </svg>
  )
}
