import type { Icon } from './types'

export const IconUsersPlus: Icon = ({
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
      data-slot='icon-ui-users-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.44 18.86h6.91q-2.14-7.58-7.67-7.6c-1.45.13-1.39.9-2.73 2.56-.72.68-1.76 1.18-.6 1.74a8.5 8.5 0 0 1 4.09 3.3'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M19.8 6.72a4.72 4.72 0 0 1-5.78 4.6c0-1.9-2.24-4.83-2.24-4.83s-1.4-.2-1.37-.42a4.72 4.72 0 0 1 9.39.65'
        fill='currentColor'
      />
      <path d='M15.44 19.04h7.08' stroke='currentColor' />
      <path d='M18.98 22.58V15.5' stroke='currentColor' />
      <path d='M10.47 5.78a4.72 4.72 0 1 1 3.27 5.45' stroke='currentColor' />
      <path
        d='M13.78 10.3a4.7 4.7 0 0 1-4.72 4.72 4.72 4.72 0 1 1 4.72-4.72'
        stroke='currentColor'
      />
      <path d='M2.17 21.99a6.9 6.9 0 0 1 9.82-6.25' stroke='currentColor' />
      <path d='M14 11.43h.92q1.6.01 2.96.67' stroke='currentColor' />
    </svg>
  )
}
