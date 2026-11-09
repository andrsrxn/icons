import type { Icon } from './types'

export const IconSquareCursor: Icon = ({
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
      data-slot='icon-ui-square-cursor'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.3 2.7c3.78 0 5.66 0 6.83 1.17 1.18 1.17 1.18 3.05 1.18 6.82v4.87l-8-1.96 2.23 7.7h-4.85c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.05-1.18-6.82v-2.62c0-3.77 0-5.65 1.18-6.82 1.17-1.18 3.05-1.18 6.82-1.18h2.62'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M21.3 11.04v-.35c0-3.77 0-5.65-1.17-6.82-1.17-1.18-3.05-1.18-6.82-1.18h-2.62c-3.77 0-5.65 0-6.82 1.18-1.18 1.17-1.18 3.05-1.18 6.82v2.62c0 3.77 0 5.65 1.18 6.82 1.17 1.18 3.05 1.18 6.82 1.18h.24'
        stroke='currentColor'
      />
      <path
        d='m14.04 16.8 1.15 3.47h0c.46 1.4.69 2.09 1.06 2.27a1 1 0 0 0 .85.03c.38-.17.65-.85 1.18-2.22h0c.2-.52.3-.77.45-.99a2 2 0 0 1 .42-.42c.22-.16.47-.26.99-.46h0c1.38-.54 2.07-.81 2.24-1.2a1 1 0 0 0-.03-.84c-.19-.37-.9-.6-2.3-1.06l-3.5-1.12c-1.63-.53-2.45-.79-2.88-.35-.43.43-.16 1.25.37 2.88'
        stroke='currentColor'
      />
    </svg>
  )
}
