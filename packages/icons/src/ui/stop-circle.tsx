import type { Icon } from './types'

export const IconStopCircle: Icon = ({
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
      data-slot='icon-ui-stop-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.78 12a10.22 10.22 0 1 0 20.44 0 10.22 10.22 0 0 0-20.44 0m5.54-4.52h9.2v9.16h-9.2z'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.22' transform='rotate(90 12 12)' stroke='currentColor' />
      <rect
        width='9.47'
        height='9.47'
        rx='2'
        transform='scale(1 -1)rotate(90 16.74 0)'
        stroke='currentColor'
      />
    </svg>
  )
}
