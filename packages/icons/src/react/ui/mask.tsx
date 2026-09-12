import type { Icon } from './types'

export const IconMask: Icon = ({
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
      data-slot='icon-ui-mask'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='m5.44 6.82 13.35-.2 1.2 8.9-8.33 3.45-7.69-3.71z' fill='currentColor' />
      <path
        d='M19.05 10.23c0 1.03.22 1.98.5 2.78.34.97.5 1.46 1.22 1.46.7 0 .88-.49 1.21-1.46.28-.8.5-1.75.5-2.78s-.22-1.97-.5-2.78c-.33-.97-.5-1.45-1.21-1.45s-.88.48-1.22 1.45a9 9 0 0 0-.5 2.78'
        stroke='currentColor'
      />
      <path
        d='M1.57 10.29c0 1.02.22 1.97.5 2.78.34.97.5 1.45 1.22 1.45.7 0 .88-.48 1.21-1.45.28-.8.5-1.76.5-2.78S4.78 8.3 4.5 7.5c-.33-.96-.5-1.45-1.2-1.45s-.88.49-1.22 1.46a9 9 0 0 0-.5 2.78'
        stroke='currentColor'
      />
      <path d='M18.78 7.08A21 21 0 0 0 12 6.11c-2.67 0-4.21.22-6.78.97' stroke='currentColor' />
      <path d='M14.03 10.6a6 6 0 0 0-2.03-.31c-.8 0-1.26.07-2.03.3' stroke='currentColor' />
      <path d='M15.54 13.96c-1.34.4-2.14.53-3.54.53s-2.2-.12-3.54-.53' stroke='currentColor' />
      <path
        d='M20.97 14.49c-3.06 2.1-5.42 3.73-8.94 3.73-3.53 0-6.14-1.9-9.15-3.73'
        stroke='currentColor'
      />
    </svg>
  )
}
