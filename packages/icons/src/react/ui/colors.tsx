import type { Icon } from './types'

export const IconColors: Icon = ({
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
      data-slot='icon-ui-colors'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.2 8.4c0 2.8-2.28 4.55-5.1 4.55-2.46-1.27-5.08-1.74-5.08-4.56a5.09 5.09 0 1 1 10.17 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M21.44 15.91a5.1 5.1 0 0 1-5.1 5.09c-2.8 0-4.16-1.9-4.16-4.7 0-2.82 1.73-4.1 4.17-5.48a5.1 5.1 0 0 1 5.09 5.1'
        fill='currentColor'
      />
      <circle cx='7.65' cy='15.91' r='5.09' stroke='currentColor' />
      <path d='M16.35 10.82a5.09 5.09 0 1 1-4.2 7.97' stroke='currentColor' />
      <path d='M7.2 10.5a5.08 5.08 0 1 1 4.98 2.88' stroke='currentColor' />
    </svg>
  )
}
