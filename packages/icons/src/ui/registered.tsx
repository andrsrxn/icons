import type { Icon } from './types'

export const IconRegistered: Icon = ({
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
      data-slot='icon-ui-registered'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.78 12a10.22 10.22 0 1 0 20.44 0 10.22 10.22 0 0 0-20.44 0'
        fill='currentColor'
      />
      <path
        d='M1.78 12a10.22 10.22 0 1 1 20.44 0 10.22 10.22 0 0 1-20.44 0'
        stroke='currentColor'
      />
      <path d='m11.41 13 4.03 4.6' stroke='currentColor' />
      <path
        d='M9 17.6V7.4c0-.46 0-.7.15-.85.15-.14.38-.14.85-.14h3.04a3.1 3.1 0 0 1 3.03 3.2c0 1.77-1.36 3.2-3.03 3.2h-4'
        stroke='currentColor'
      />
    </svg>
  )
}
