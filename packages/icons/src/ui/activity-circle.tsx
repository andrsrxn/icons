import type { Icon } from './types'

export const IconActivityCircle: Icon = ({
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
      data-slot='icon-ui-activity-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <g clipPath='url(#a)'>
        <path
          opacity='.2'
          d='M1.69 12a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
          fill='currentColor'
        />
        <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
        <path
          d='M5.92 12.09h1.1c.33 0 .49 0 .61-.08.13-.09.19-.23.32-.53L9.2 8.52c.49-1.15.73-1.73 1.1-1.7.35.03.5.64.8 1.86l1.62 6.79c.28 1.16.42 1.75.77 1.78s.6-.5 1.1-1.6l1.38-2.98c.13-.28.2-.42.32-.5.13-.08.28-.08.6-.08h1.19'
          stroke='currentColor'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
