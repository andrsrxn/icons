import type { Icon } from './types'

export const IconPipIn: Icon = ({
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
      data-slot='icon-ui-pip-in'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M16.8 20.1h-.13c-1.53 0-2.3 0-2.84-.4a2 2 0 0 1-.4-.41c-.4-.54-.4-1.3-.4-2.84.01-1.54.01-2.3.41-2.84a2 2 0 0 1 .4-.4c.54-.4 1.3-.4 2.83-.4h3.3c.26 0 .39 0 .5.02a2 2 0 0 1 1.77 1.77l.01.5'
        stroke='currentColor'
      />
      <path d='m5.35 7.66 5.12 3.86' stroke='currentColor' />
      <path
        d='m10.79 7.83.16 1.36c.17 1.4.26 2.11-.13 2.6-.38.49-1.08.57-2.49.74l-1.37.17'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M1.75 12c0-3.77 0-5.66 1.17-6.83S5.98 4 9.75 4h4.5c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v.94h-9.3V20h-3.2c-3.77 0-5.66 0-6.83-1.17S1.75 15.77 1.75 12'
        fill='currentColor'
      />
      <path
        d='M9.75 20.13h4.5c3.77 0 5.66 0 6.83-1.17 1.17-1.18 1.17-3.06 1.17-6.83v-.26c0-3.77 0-5.65-1.17-6.83s-3.06-1.17-6.83-1.17h-4.5c-3.77 0-5.66 0-6.83 1.17-1.17 1.18-1.17 3.06-1.17 6.83v.26c0 3.77 0 5.65 1.17 6.83s3.06 1.17 6.83 1.17'
        stroke='currentColor'
      />
    </svg>
  )
}
