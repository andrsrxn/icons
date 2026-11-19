import type { Icon } from './types'

export const IconTextUppercase: Icon = ({
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
      data-slot='icon-ui-text-uppercase'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M1.74 18.7 4 10.99h0c1.11-3.8 1.67-5.7 2.72-5.69 1.04.02 1.55 1.93 2.57 5.76l2.03 7.66'
        stroke='currentColor'
      />
      <path d='M3.53 13.55h6.2' stroke='currentColor' />
      <path
        d='M16.11 5.3h2.11a3.1 3.1 0 0 1 3.1 3.09c0 1.7-1.05 3.1-3.83 3.1h1.16a3.61 3.61 0 1 1 0 7.22h-2.37m.05-.01c-1 0-1.5 0-1.86-.25q-.2-.14-.33-.34c-.25-.35-.25-.85-.25-1.86V7.74c0-1 0-1.5.25-1.86q.13-.2.33-.34c.36-.25.86-.25 1.86-.25'
        stroke='currentColor'
      />
    </svg>
  )
}
