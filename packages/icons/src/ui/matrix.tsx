import type { Icon } from './types'

export const IconMatrix: Icon = ({
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
      data-slot='icon-ui-matrix'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='18.57'
        height='20.42'
        rx='3'
        transform='matrix(0 -1 -1 0 22.21 21.29)'
        fill='currentColor'
      />
      <path
        d='M7.35 21.38c-1.45 0-2.18 0-2.77-.19a4 4 0 0 1-2.6-2.6c-.2-.6-.2-1.32-.2-2.77V8.18c0-1.45 0-2.18.2-2.77a4 4 0 0 1 2.6-2.6c.6-.19 1.32-.19 2.77-.19'
        stroke='currentColor'
      />
      <path
        d='M16.71 21.38c1.42 0 2.13 0 2.7-.18a4 4 0 0 0 2.65-2.64c.18-.58.18-1.29.18-2.7V8.14c0-1.42 0-2.13-.18-2.71a4 4 0 0 0-2.64-2.64c-.58-.18-1.29-.18-2.7-.18'
        stroke='currentColor'
      />
      <path
        d='M7.26 7.26a.6.6 0 1 1-1.19 0 .6.6 0 0 1 1.19 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M7.26 12a.6.6 0 1 1-1.19 0 .6.6 0 0 1 1.19 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M7.26 16.74a.6.6 0 1 1-1.19 0 .6.6 0 0 1 1.19 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.6 7.26a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.19 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.6 12a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.19 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.6 16.74a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.19 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.95 7.26a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.95 12a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.95 16.74a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
