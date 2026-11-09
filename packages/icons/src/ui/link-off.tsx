import type { Icon } from './types'

export const IconLinkOff: Icon = ({
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
      data-slot='icon-ui-link-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.14 3.38a5.29 5.29 0 0 1 7.47 7.47l-9.75 9.77a5.29 5.29 0 0 1-7.47-7.47z'
        fill='currentColor'
      />
      <path d='M9.11 14.89 12 12' stroke='currentColor' />
      <path d='m13.85 10.15 1.64-1.64' stroke='currentColor' />
      <path d='m6.38 10.14-3.09 3.1a5.29 5.29 0 0 0 7.47 7.47l3.02-3.02' stroke='currentColor' />
      <path d='m10.15 6.37 3.09-3.08a5.29 5.29 0 0 1 7.47 7.47l-3.08 3.09' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
