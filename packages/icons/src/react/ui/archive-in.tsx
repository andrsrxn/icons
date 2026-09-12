import type { Icon } from './types'

export const IconArchiveIn: Icon = ({
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
      data-slot='icon-ui-archive-in'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='14.27'
        height='20.46'
        rx='3'
        transform='matrix(0 -1 -1 0 22.23 21.28)'
        fill='currentColor'
      />
      <rect
        width='14.27'
        height='20.46'
        rx='3'
        transform='matrix(0 -1 -1 0 22.23 21.28)'
        stroke='currentColor'
      />
      <path
        d='m21.56 8.08-.5-.99c-1.08-2.12-1.62-3.19-2.59-3.78s-2.15-.59-4.54-.59h-3.78c-2.26 0-3.4 0-4.32.54S4.33 4.78 3.2 6.74l-.77 1.34'
        stroke='currentColor'
      />
      <path
        d='m15.6 15.01-.77.77c-1.33 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-.77-.77'
        stroke='currentColor'
      />
      <path d='M12 10.9v6.53' stroke='currentColor' />
    </svg>
  )
}
