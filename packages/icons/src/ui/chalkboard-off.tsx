import type { Icon } from './types'

export const IconChalkboardOff: Icon = ({
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
      data-slot='icon-ui-chalkboard-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M17.27 15.31c1.43 0 2.14 0 2.65-.35a2 2 0 0 0 .53-.53c.35-.5.35-1.22.35-2.64 0-2.85 0-4.27-.7-5.3a4 4 0 0 0-1.05-1.05c-1.02-.7-2.45-.7-5.3-.7h-2.53c-3.77 0-5.66 0-6.83 1.18-1.17 1.17-1.17 3.06-1.17 6.83v2.5c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h3.94a2 2 0 0 0 1.76-1.55l.06-.42.06-.41a2 2 0 0 1 1.77-1.55l.42-.01z'
        fill='currentColor'
      />
      <path
        d='M8.9 4.75h3.9c3.77 0 5.65 0 6.82 1.17 1.18 1.17 1.18 3.06 1.18 6.83v4.18'
        stroke='currentColor'
      />
      <path
        d='M18.59 15.28h.4c.28 0 .43 0 .54.02.64.1 1.14.6 1.25 1.24.02.12.02.26.02.54'
        stroke='currentColor'
      />
      <path d='M3.22 19.25V8.8a4 4 0 0 1 1.96-3.36' stroke='currentColor' />
      <path
        d='M12.78 19.25v-1.54c0-.87 0-1.3.18-1.63q.22-.41.62-.63c.33-.17.76-.17 1.63-.17'
        stroke='currentColor'
      />
      <path d='M19.18 19.25H1.6' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
