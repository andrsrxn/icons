import type { Icon } from './types'

export const IconListRefresh: Icon = ({
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
      data-slot='icon-ui-list-refresh'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.42 6H2.67' stroke='currentColor' />
      <path d='M10.2 12H2.67' stroke='currentColor' />
      <path d='M10.2 18H2.67' stroke='currentColor' />
      <path
        opacity='.2'
        d='M18.03 10.68a4.34 4.34 0 1 0 0 8.68 4.34 4.34 0 0 0 0-8.68'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M13.91 16.76c.9 1.61 2.2 2.6 4.23 2.6a4.5 4.5 0 0 0 3.93-2.6'
        stroke='currentColor'
      />
      <path
        d='M22.04 13.07a4.8 4.8 0 0 0-4.23-2.6c-1.97 0-3.25 1.31-4.05 2.6'
        stroke='currentColor'
      />
      <path
        d='m19.77 13.27.87.11c.82.1 1.22.15 1.5-.07s.34-.63.44-1.44l.1-.88'
        stroke='currentColor'
      />
      <path
        d='m13.15 19.12.12-1c.1-.91.16-1.38.48-1.63s.78-.2 1.7-.08l.64.07'
        stroke='currentColor'
      />
    </svg>
  )
}
