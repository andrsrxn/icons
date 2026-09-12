import type { Icon } from './types'

export const IconFireAlarm: Icon = ({
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
      data-slot='icon-ui-fire-alarm'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='4.14'
        height='18.53'
        rx='1'
        transform='matrix(0 -1 -1 0 21.06 21.23)'
        fill='currentColor'
      />
      <path d='M4.07 16.7c0-5.63 2.26-10.2 7.93-10.2s7.93 4.3 7.93 10.2' stroke='currentColor' />
      <path d='M14.64 10.5a3.9 3.9 0 0 1 1.56 3.55' stroke='currentColor' />
      <rect
        width='4.14'
        height='19.21'
        rx='1'
        transform='matrix(0 -1 -1 0 21.6 21.23)'
        stroke='currentColor'
      />
      <path d='M12 3.78v-1.8' stroke='currentColor' />
      <path d='m5.64 5.65-.94-1.4' stroke='currentColor' />
      <path d='m18.32 5.65.98-1.4' stroke='currentColor' />
    </svg>
  )
}
