import type { Icon } from './types'

export const IconDoorOpen: Icon = ({
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
      data-slot='icon-ui-door-open'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' fill='currentColor' d='M13.82 4h5.28v17.62h-5.28z' />
      <path d='m9.87 12.48 1.73-.36' stroke='currentColor' />
      <path
        d='M14.37 21.32V6.7c0-2.46 0-3.69-.8-4.29-.81-.6-2-.24-4.35.46l-1.47.44c-1.37.41-2.06.62-2.45 1.15s-.4 1.25-.4 2.68v14.2'
        stroke='currentColor'
      />
      <path d='M21 21.61H3' stroke='currentColor' />
      <path
        d='M14.37 4h.73c1.88 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v13.32'
        stroke='currentColor'
      />
    </svg>
  )
}
