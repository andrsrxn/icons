import type { Icon } from './types'

export const IconDeviceSmartwatchIn: Icon = ({
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
      data-slot='icon-ui-device-smartwatch-in'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='7.23'
        y='5.29'
        width='3.52'
        height='9.54'
        rx='1.76'
        transform='rotate(-90 7.23 5.29)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='7.23'
        y='22.2'
        width='3.52'
        height='9.54'
        rx='1.76'
        transform='rotate(-90 7.23 22.2)'
        fill='currentColor'
      />
      <rect
        x='4.83'
        y='18.71'
        width='13.42'
        height='14.34'
        rx='3'
        transform='rotate(-90 4.83 18.71)'
        stroke='currentColor'
      />
      <path
        d='M16.77 5.29c0-1.42 0-2.13-.34-2.64a2 2 0 0 0-.53-.54c-.51-.34-1.22-.34-2.65-.34h-2.5c-1.43 0-2.14 0-2.65.34a2 2 0 0 0-.53.54c-.34.5-.34 1.22-.34 2.64'
        stroke='currentColor'
      />
      <path
        d='M16.77 18.68c0 1.42 0 2.13-.34 2.64a2 2 0 0 1-.53.53c-.51.35-1.22.35-2.65.35h-2.5c-1.43 0-2.14 0-2.65-.35a2 2 0 0 1-.53-.53c-.34-.51-.34-1.22-.34-2.64'
        stroke='currentColor'
      />
      <path
        d='m14.62 11.15-.5-.5c-1-1-1.5-1.5-2.12-1.5s-1.12.5-2.12 1.5l-.5.5'
        stroke='currentColor'
      />
      <path d='M12 15V9.52' stroke='currentColor' />
    </svg>
  )
}
