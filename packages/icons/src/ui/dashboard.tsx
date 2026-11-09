import type { Icon } from './types'

export const IconDashboard: Icon = ({
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
      data-slot='icon-ui-dashboard'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.72 11c0-.94 0-1.41.29-1.7.3-.3.76-.3 1.7-.3h4.07c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v7.7c0 .58 0 .86-.11 1.08a1 1 0 0 1-.43.42c-.21.12-.5.12-1.07.12-2.3 0-3.44 0-4.3-.46a4 4 0 0 1-1.7-1.7c-.45-.86-.45-2-.45-4.3z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M1.96 9c0-1.26 0-1.9.14-2.4a4 4 0 0 1 2.8-2.82c.53-.14 1.16-.14 2.42-.14h9.6c1.27 0 1.9 0 2.42.14a4 4 0 0 1 2.8 2.81c.14.52.14 1.15.14 2.41z'
        fill='currentColor'
      />
      <path
        d='M8.72 20.36h6.56c3.3 0 4.95 0 5.98-1.03 1.02-1.02 1.02-2.67 1.02-5.97v-2.72c0-3.3 0-4.95-1.02-5.97-1.03-1.03-2.68-1.03-5.98-1.03H8.72c-3.3 0-4.95 0-5.98 1.03-1.02 1.02-1.02 2.67-1.02 5.97v2.72c0 3.3 0 4.95 1.02 5.97 1.03 1.03 2.68 1.03 5.98 1.03'
        stroke='currentColor'
      />
      <path d='M9.78 20V9' stroke='currentColor' />
      <path d='M2.01 9h19.98' stroke='currentColor' />
    </svg>
  )
}
