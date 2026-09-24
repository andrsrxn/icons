import type { Icon } from './types'

export const IconRadioTower: Icon = ({
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
      data-slot='icon-ui-radio-tower'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12.07'
        cy='8.32'
        r='2.53'
        transform='rotate(90 12.07 8.32)'
        fill='currentColor'
      />
      <circle
        cx='12.07'
        cy='8.32'
        r='2.53'
        transform='rotate(90 12.07 8.32)'
        stroke='currentColor'
      />
      <path d='M7.58 4.24a5.8 5.8 0 0 0-1.42 4.08c0 1.69.37 2.75 1.42 4.08' stroke='currentColor' />
      <path
        d='M16.42 4.24a5.8 5.8 0 0 1 1.42 4.08c0 1.69-.37 2.75-1.42 4.08'
        stroke='currentColor'
      />
      <path d='M4.93 1.68a9.5 9.5 0 0 0-2.3 6.64c0 2.74.6 4.48 2.3 6.64' stroke='currentColor' />
      <path d='M19.07 1.68a9.5 9.5 0 0 1 2.3 6.64 9.5 9.5 0 0 1-2.3 6.64' stroke='currentColor' />
      <path d='m6.87 22.32 4.07-11.28' stroke='currentColor' />
      <path d='m17.13 22.32-4.2-11.28' stroke='currentColor' />
      <path d='M8.63 17.68h6.61' stroke='currentColor' />
    </svg>
  )
}
