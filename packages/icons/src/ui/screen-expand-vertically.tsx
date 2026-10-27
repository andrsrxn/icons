import type { Icon } from './types'

export const IconScreenExpandVertically: Icon = ({
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
      data-slot='icon-ui-screen-expand-vertically'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='14.24'
        height='20.53'
        rx='3'
        transform='matrix(1 0 0 -1 4.88 22.27)'
        fill='currentColor'
      />
      <path d='M7.98 1.73H7.8a3 3 0 0 0-2.93 2.93v14.68a3 3 0 0 0 3.1 2.93' stroke='currentColor' />
      <path
        d='M16.02 1.73h.17a3 3 0 0 1 2.93 2.93v14.68a3 3 0 0 1-2.93 2.93h-.17'
        stroke='currentColor'
      />
      <path d='M12 19.88v-5.4' stroke='currentColor' />
      <path d='M12 4.12v5.43' stroke='currentColor' />
      <path
        d='m9.3 18.32.58.58c1 1 1.5 1.5 2.12 1.5s1.12-.5 2.12-1.5l.59-.58'
        stroke='currentColor'
      />
      <path
        d='m9.3 5.68.58-.59c1-1 1.5-1.5 2.12-1.5s1.12.5 2.12 1.5l.59.59'
        stroke='currentColor'
      />
    </svg>
  )
}
