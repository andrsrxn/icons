import type { Icon } from './types'

export const IconSquircle: Icon = ({
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
      data-slot='icon-ui-squircle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 21.4c3.64 0 5.46 0 6.8-.84a5.5 5.5 0 0 0 1.76-1.77c.83-1.33.83-3.15.83-6.79s0-5.46-.83-6.8a5.5 5.5 0 0 0-1.77-1.76C17.46 2.6 15.64 2.6 12 2.6s-5.46 0-6.8.83A5.5 5.5 0 0 0 3.45 5.2C2.6 6.54 2.6 8.36 2.6 12s0 5.46.83 6.8a5.5 5.5 0 0 0 1.77 1.76c1.33.83 3.15.83 6.79.83'
        fill='currentColor'
      />
      <path
        d='M2.6 12c0-3.64 0-5.46.84-6.8A5.5 5.5 0 0 1 5.2 3.45C6.54 2.6 8.36 2.6 12 2.6v0c3.64 0 5.46 0 6.8.83a5.5 5.5 0 0 1 1.76 1.77c.83 1.33.83 3.15.83 6.79v0c0 3.64 0 5.46-.83 6.8a5.5 5.5 0 0 1-1.77 1.76c-1.33.83-3.15.83-6.79.83v0c-3.64 0-5.46 0-6.8-.83a5.5 5.5 0 0 1-1.76-1.77C2.6 17.46 2.6 15.64 2.6 12'
        stroke='currentColor'
      />
    </svg>
  )
}
