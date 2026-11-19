import type { Icon } from './types'

export const IconMountain: Icon = ({
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
      data-slot='icon-ui-mountain'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m6.9 9.43 3.23-1.05 4.4 1.6 2.2-.88L19 15.6l2.79 5.96H2.3l2.8-6.52z'
        fill='currentColor'
      />
      <path
        d='M21.66 21.33c-3.65-6.76-5.72-18.9-9.73-18.9-4 0-6.07 13.08-9.72 18.9'
        stroke='currentColor'
      />
      <path
        d='M16.6 8.89s-1.42 1.04-2.68 1.04c-1.4 0-2.21-1.23-3.59-1.23-1.54 0-3.3.95-3.3.95'
        stroke='currentColor'
      />
    </svg>
  )
}
