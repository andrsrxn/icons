import type { Icon } from './types'

export const IconPipOut: Icon = ({
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
      data-slot='icon-ui-pip-out'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.75 12c0-3.77 0-5.66 1.17-6.83S5.98 4 9.75 4h4.5c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v.94h-9.3V20h-3.2c-3.77 0-5.66 0-6.83-1.17S1.75 15.77 1.75 12'
        fill='currentColor'
      />
      <path
        d='M9.75 20.13h4.5c3.77 0 5.66 0 6.83-1.17 1.17-1.18 1.17-3.06 1.17-6.83v-.26c0-3.77 0-5.65-1.17-6.83s-3.06-1.17-6.83-1.17h-4.5c-3.77 0-5.66 0-6.83 1.17-1.17 1.18-1.17 3.06-1.17 6.83v.26c0 3.77 0 5.65 1.17 6.83s3.06 1.17 6.83 1.17'
        stroke='currentColor'
      />
      <path
        d='M17.03 20.1h-.35c-1.53 0-2.3 0-2.83-.4a2 2 0 0 1-.4-.4c-.4-.54-.4-1.31-.4-2.85 0-1.53 0-2.3.4-2.83a2 2 0 0 1 .4-.4c.53-.4 1.3-.4 2.83-.4h3.26l.55.01a2 2 0 0 1 1.75 1.75l.01.54'
        stroke='currentColor'
      />
      <path d='M13.46 13.5 7.92 9.58' stroke='currentColor' />
      <path
        d='m7.61 13.5-.21-1.64c-.2-1.4-.28-2.1.1-2.6.37-.5 1.07-.58 2.48-.77l1.65-.21'
        stroke='currentColor'
      />
    </svg>
  )
}
