import type { Icon } from './types'

export const IconDropper: Icon = ({
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
      data-slot='icon-ui-dropper'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='7.46'
        height='6.05'
        rx='1'
        transform='scale(1 -1)rotate(45 21.52 16.15)'
        fill='#000'
      />
      <path
        d='M4.83 20.86c1.3.05 1.94.08 2.53-.15s1.04-.69 1.96-1.6l12-12a3.13 3.13 0 0 0-4.43-4.42l-12 11.99c-.91.92-1.37 1.38-1.6 1.96s-.2 1.24-.15 2.53l.03.7c.02.44.03.65.17.8.14.13.35.14.8.16zm15.62-7.3-9.9-9.9m-7.11 16.9-1.56 1.56'
        stroke='#000'
      />
    </svg>
  )
}
