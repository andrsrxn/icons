import type { Icon } from './types'

export const IconEarOff: Icon = ({
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
      data-slot='icon-ui-ear-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.39 3.88 4.99 7.1v7.57l2.4 2.41a2 2 0 0 1 .5.9l.54 2.03a2 2 0 0 0 1.18 1.35l1.47.59a2 2 0 0 0 1.6-.04l1.67-.79a2 2 0 0 0 1.1-1.41l.84-4.12a2 2 0 0 1 .24-.62l2.64-4.48a2 2 0 0 0 .23-1.43l-.82-3.86a2 2 0 0 0-1.05-1.37l-3.4-1.73a2 2 0 0 0-1.45-.14L8.45 3.14a2 2 0 0 0-1.06.74'
        fill='currentColor'
      />
      <path
        d='M9.92 6.14c.8-.62 1.8-1.02 2.7-1.02 1.92 0 2.95 1.21 3.07 2.79a5 5 0 0 1-.78 3.22'
        stroke='currentColor'
      />
      <path d='M12.5 16.33c-.3-1.5.43-2.56.43-2.56l.28-.41' stroke='currentColor' />
      <path d='M10.05 10.73c-.4 1.13-1.48 1.54-2.45 1.02' stroke='currentColor' />
      <path d='m2.71 2.71 18.58 18.58' stroke='currentColor' />
      <path
        d='M5.2 15.07a4.5 4.5 0 0 1 2.85 2.87c.56 1.68.41 3.28 2.25 3.95 1.75.64 4.04.42 5.03-1.43.6-1.15.37-1.82.72-4.33m1.38-2.9c1.13-1.4 2.45-2.86 1.9-6.11-.6-3.6-3.23-5.3-6.75-5.3-1.61 0-3.34.57-4.8 1.76l-.17.17'
        stroke='currentColor'
      />
      <path d='M5.2 7.13q.28-.66.61-1.24' stroke='currentColor' />
    </svg>
  )
}
