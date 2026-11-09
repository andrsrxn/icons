import type { Icon } from './types'

export const IconVr: Icon = ({
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
      data-slot='icon-ui-vr'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
      <path
        d='m3.66 7.03 3.2 9.07c.24.67.36 1 .57 1 .22 0 .33-.33.57-1l3.2-9.07'
        stroke='currentColor'
      />
      <path d='m16.3 12.9 3.61 4.11' stroke='currentColor' />
      <path
        d='M14.02 17.01V8c0-.47 0-.71.14-.86.15-.14.39-.14.86-.14h2.61a2.8 2.8 0 0 1 2.72 2.87 2.8 2.8 0 0 1-2.72 2.87h-3.57'
        stroke='currentColor'
      />
    </svg>
  )
}
