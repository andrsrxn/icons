import type { Icon } from './types'

export const IconAvalanche: Icon = ({
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
      data-slot='icon-ui-avalanche'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M14 18.9a2.81 2.81 0 1 0 4.32-3.26' stroke='currentColor' />
      <path
        d='M18.25 15.7c1.27-.03 2.28-1.25 2.26-2.73s-1.08-2.67-2.35-2.64q-.68.01-1.2.42m-.68 1.55a2.4 2.4 0 1 0-4.49-1.04m1.71-5.71-1.2-3.03m5.32 4.19-1.07-3.07'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M3.45 16.04V8.22l4.94 1.8 2.48-1 2.3 7.3 2.56 6.71H3.45z'
        fill='currentColor'
      />
      <path
        d='M15.73 22.57C10.92 14.55 11.66 1.7 5.47 1.54c-.39 0-.95.1-1.38.45'
        stroke='currentColor'
      />
      <path d='M10.71 8.81S9.18 9.94 7.82 9.94c-1.5 0-2.39-1.34-3.87-1.34' stroke='currentColor' />
    </svg>
  )
}
