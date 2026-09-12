import type { Icon } from './types'

export const IconBriefcase: Icon = ({
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
      data-slot='icon-ui-briefcase'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.76'
        y='10.78'
        width='20.48'
        height='10.41'
        rx='2'
        fill='currentColor'
      />
      <rect x='1.76' y='7' width='20.48' height='14.19' rx='3' stroke='currentColor' />
      <path
        d='m6 7 .83-1.4c.57-.96.86-1.44 1.32-1.7s1.01-.26 2.12-.26h3.5c1.13 0 1.7 0 2.16.27s.75.76 1.3 1.75L18 7'
        stroke='currentColor'
      />
      <path d='M22 11H2' stroke='currentColor' />
    </svg>
  )
}
