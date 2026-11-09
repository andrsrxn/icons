import type { Icon } from './types'

export const IconRefreshPlus: Icon = ({
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
      data-slot='icon-ui-refresh-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M12.19 8v8' stroke='currentColor' />
      <path d='M8.18 12h8' stroke='currentColor' />
      <circle opacity='.2' cx='11.95' cy='12.07' r='9.41' fill='currentColor' />
      <path d='M3.5 15.96c1.91 3.4 4.63 5.49 8.92 5.49s7.13-3.06 8.3-5.49' stroke='currentColor' />
      <path
        d='M20.65 8.17c-1.92-3.4-5.1-5.48-8.93-5.48-4.15 0-6.86 2.76-8.55 5.48'
        stroke='currentColor'
      />
      <path
        d='M17.39 9h1.33c1.24 0 1.86 0 2.24-.38.39-.39.39-1 .39-2.25V5.04'
        stroke='currentColor'
      />
      <path d='M2.55 18.93V17.6c0-1.23 0-1.85.38-2.23s1-.38 2.22-.38h1.33' stroke='currentColor' />
    </svg>
  )
}
