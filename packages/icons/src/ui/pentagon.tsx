import type { Icon } from './types'

export const IconPentagon: Icon = ({
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
      data-slot='icon-ui-pentagon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M9.6 3.8c1.16-.87 1.73-1.3 2.4-1.3s1.24.43 2.4 1.3l2.77 2.08 2.84 2c1.18.83 1.77 1.24 1.98 1.88s-.03 1.31-.5 2.68l-1.12 3.28-1.02 3.31c-.43 1.38-.64 2.07-1.18 2.46s-1.26.39-2.7.36L12 21.8l-3.47.05c-1.44.03-2.16.04-2.7-.36s-.75-1.08-1.18-2.46l-1.02-3.31-1.12-3.28c-.47-1.37-.7-2.05-.5-2.68.21-.64.8-1.05 1.98-1.89l2.84-1.99z'
        fill='currentColor'
      />
      <path
        d='M8.4 4.46c1.73-1.3 2.6-1.95 3.6-1.95s1.87.65 3.6 1.95l1.68 1.27L19 6.93c1.78 1.25 2.66 1.88 2.97 2.83s-.04 1.98-.74 4.03l-.68 1.99-.62 2c-.64 2.08-.96 3.12-1.77 3.7-.8.6-1.89.57-4.06.54L12 22l-2.1.03c-2.17.03-3.25.05-4.06-.54-.81-.58-1.13-1.62-1.77-3.7l-.62-2-.68-2c-.7-2.04-1.05-3.07-.74-4.02.3-.95 1.2-1.58 2.97-2.82l1.72-1.21z'
        stroke='currentColor'
      />
    </svg>
  )
}
