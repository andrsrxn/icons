import type { Icon } from './types'

export const IconTaxiFront: Icon = ({
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
      data-slot='icon-ui-taxi-front'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.12 13.21c-.18-1-.26-1.51-.47-1.92a3 3 0 0 0-1.78-1.5c-.44-.13-.95-.13-1.98-.13H7.3c-1 0-1.49 0-1.91.13a3 3 0 0 0-1.76 1.43c-.22.38-.32.87-.53 1.84-.3 1.42-.45 2.13-.35 2.7a3 3 0 0 0 1.83 2.26c.54.22 1.27.22 2.72.22h9.6c1.4 0 2.1 0 2.63-.2a3 3 0 0 0 1.84-2.2c.11-.55 0-1.25-.25-2.63'
        fill='currentColor'
      />
      <path
        d='M21.17 13.25c-.17-1.02-.25-1.53-.46-1.94a3 3 0 0 0-1.78-1.51c-.44-.14-.96-.14-1.99-.14H7.06c-1.03 0-1.55 0-1.99.14a3 3 0 0 0-1.77 1.5c-.2.4-.3.92-.46 1.94-.23 1.37-.34 2.06-.23 2.61a3 3 0 0 0 1.84 2.18c.53.2 1.23.2 2.62.2h9.88c1.4 0 2.09 0 2.62-.2a3 3 0 0 0 1.84-2.18c.11-.55 0-1.24-.23-2.61'
        stroke='currentColor'
      />
      <path
        d='m5.06 9.66.08-.47c.44-2.35.66-3.52 1.49-4.21.83-.7 2.03-.7 4.41-.7H13c2.49 0 3.73 0 4.58.74S18.6 7 18.94 9.46l.03.2'
        stroke='currentColor'
      />
      <path d='M4.8 18.24v.44a2.26 2.26 0 0 0 4.52 0v-.44' stroke='currentColor' />
      <path d='M14.85 18.24v.44a2.26 2.26 0 0 0 4.51 0v-.44' stroke='currentColor' />
      <path d='m19.5 9.66 2.16-2.15' stroke='currentColor' />
      <path d='M9.23 1.77h5.57' stroke='currentColor' />
      <path d='M15.77 14.88h2.16' stroke='currentColor' />
      <path d='M5.98 14.88h2.27' stroke='currentColor' />
      <path d='M5 9.66 2.83 7.5' stroke='currentColor' />
    </svg>
  )
}
