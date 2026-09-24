import type { Icon } from './types'

export const IconRoad: Icon = ({
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
      data-slot='icon-ui-road'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.84 22.25c3.22 0 4.83 0 5.73-1.04.9-1.03.67-2.63.2-5.82l-1.23-8.5c-.35-2.45-.53-3.67-1.37-4.4s-2.09-.74-4.56-.74h-3.17c-2.5 0-3.74 0-4.6.74-.84.74-1 1.98-1.34 4.45l-1.16 8.5c-.43 3.17-.64 4.76.25 5.78.9 1.03 2.5 1.03 5.7 1.03z'
        fill='currentColor'
      />
      <path
        d='M14.6 22.25c3.33 0 5 0 5.9-1.08s.6-2.72 0-6l-1.55-8.5c-.42-2.35-.64-3.52-1.47-4.22-.84-.7-2.03-.7-4.43-.7h-2.02c-2.4 0-3.6 0-4.43.7-.84.7-1.05 1.88-1.48 4.24l-1.53 8.5c-.6 3.27-.89 4.9.01 5.98s2.56 1.08 5.9 1.08z'
        stroke='currentColor'
      />
      <path d='M12 5.61V10' stroke='currentColor' />
      <path d='M12 14v4.39' stroke='currentColor' />
    </svg>
  )
}
