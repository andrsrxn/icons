import type { Icon } from './types'

export const IconUserProhibit: Icon = ({
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
      data-slot='icon-ui-user-prohibit'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle cx='18.5' cy='18.5' r='3.6' stroke='currentColor' />
      <path d='m16 16 5 5' stroke='currentColor' />
      <path
        opacity='.2'
        d='M15.47 7.93a5.4 5.4 0 1 1-10.79 0 5.4 5.4 0 0 1 10.8 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M16.47 21.84H1.77a8.4 8.4 0 0 1 8.3-8.46c2.36 0 4.48 1 6 2.6l-1.48 2.24s.79 2.95 1.88 3.62'
        fill='currentColor'
      />
      <path d='M15.47 7.93a5.4 5.4 0 1 0-10.79 0 5.4 5.4 0 0 0 10.79 0' stroke='currentColor' />
      <path d='M1.78 21.62a8.3 8.3 0 0 1 8.3-8.3c1.05 0 2.3.35 3.23.71' stroke='currentColor' />
    </svg>
  )
}
