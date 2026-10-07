import type { Icon } from './types'

export const IconSoilMoistureGlobal: Icon = ({
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
      data-slot='icon-ui-soil-moisture-global'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.47 8s-3.92.78-6.7 3.7a16.5 16.5 0 0 0-3.58 6.1' stroke='currentColor' />
      <path d='M21.47 8s-3.92.78-6.7 3.7a16.5 16.5 0 0 0-3.58 6.1' stroke='currentColor' />
      <path d='M21.47 11.9s-1.47.25-2.85 1.41' stroke='currentColor' />
      <path d='M8.2 10.05C5.63 7.5 2.54 6.58 2.54 6.58' stroke='currentColor' />
      <path d='M6.29 12.49a10 10 0 0 0-3.73-2.29' stroke='currentColor' />
      <path d='M21.47 4.18s-5.46 1.08-9.3 5.13c-3.67 3.85-5 8.48-5 8.48' stroke='currentColor' />
      <path d='M10.14 7.33C6.68 3.9 2.53 2.66 2.53 2.66' stroke='currentColor' />
      <path
        opacity='.2'
        d='M17.15 22.15c1.38 0 2.5-1.05 2.5-2.35 0-1.64-1.22-2.98-1.95-3.64-.23-.2-.35-.3-.54-.3s-.3.1-.53.3c-.74.64-1.97 1.98-1.97 3.63 0 1.3 1.11 2.35 2.5 2.36'
        fill='currentColor'
      />
      <path
        d='M17.15 22.15c1.38 0 2.5-1.05 2.5-2.35 0-1.7-1.24-3.03-1.97-3.66-.22-.2-.33-.3-.52-.3-.18 0-.3.1-.52.3-.73.63-1.98 1.95-1.98 3.65 0 1.3 1.11 2.35 2.5 2.36'
        stroke='currentColor'
      />
    </svg>
  )
}
