import type { Icon } from './types'

export const IconBalloon: Icon = ({
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
      data-slot='icon-ui-balloon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.63 7.8c0 3.32-2.93 9.15-6.26 9.15S6.6 11.12 6.6 7.8a6.02 6.02 0 0 1 12.04 0'
        fill='currentColor'
      />
      <path
        d='M18.8 7.97c0 3.42-2.78 8.98-6.2 8.98-3.41 0-6.18-5.56-6.18-8.98a6.19 6.19 0 0 1 12.37 0'
        stroke='currentColor'
      />
      <path
        d='M12.79 16.95c.59.98.37 2-.7 2.79-1.21.89-2.94-.12-4.52.33-1.5.42-1.77 1.45-2.02 2.38'
        stroke='currentColor'
      />
      <path d='M12.44 5.17c.66.07 1.46.28 2.09.92.68.68.9 1.6.9 2.3' stroke='currentColor' />
    </svg>
  )
}
