import type { Icon } from './types'

export const IconUserPause: Icon = ({
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
      data-slot='icon-ui-user-pause'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.47 7.99a5.4 5.4 0 1 1-10.79 0 5.4 5.4 0 0 1 10.8 0'
        fill='currentColor'
      />
      <path d='M15.47 7.99a5.4 5.4 0 1 0-10.79 0 5.4 5.4 0 0 0 10.79 0' stroke='currentColor' />
      <path d='M1.78 21.68a8.3 8.3 0 0 1 8.3-8.3c.87 0 2.18.29 3.23.73' stroke='currentColor' />
      <path
        opacity='.2'
        d='M10.07 21.84h6.9v-4.72a8.3 8.3 0 0 0-6.9-3.74 8.4 8.4 0 0 0-8.3 8.46z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M16.76 15.8v5.88' stroke='currentColor' />
      <path d='M20.67 15.8v5.88' stroke='currentColor' />
    </svg>
  )
}
