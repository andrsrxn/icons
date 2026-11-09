import type { Icon } from './types'

export const IconLabel: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-label'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.8 12c0-3.18 0-4.77.86-5.86a4 4 0 0 1 .67-.67c1.1-.86 2.68-.86 5.86-.86h5.9c1.73 0 2.6 0 3.3.42.71.42 1.13 1.18 1.96 2.7l.76 1.4c.77 1.4 1.15 2.1 1.15 2.87s-.38 1.47-1.15 2.88l-.76 1.38c-.83 1.53-1.25 2.29-1.96 2.7-.7.43-1.57.43-3.3.43h-5.9c-3.18 0-4.77 0-5.86-.86a4 4 0 0 1-.67-.67c-.86-1.1-.86-2.68-.86-5.86'
        fill='currentColor'
      />
      <path
        d='m20.82 8.59-.95-1.39c-.88-1.27-1.32-1.9-1.97-2.24-.66-.35-1.43-.35-2.97-.35H9.17c-3.18 0-4.77 0-5.86.86a4 4 0 0 0-.67.67c-.86 1.1-.86 2.68-.86 5.86s0 4.77.86 5.86a4 4 0 0 0 .67.67c1.1.86 2.68.86 5.86.86h5.76c1.54 0 2.31 0 2.97-.35.65-.34 1.1-.98 1.97-2.25l.96-1.39c1.13-1.64 1.7-2.47 1.7-3.4 0-.94-.57-1.76-1.7-3.41'
        stroke='currentColor'
      />
    </svg>
  )
}
