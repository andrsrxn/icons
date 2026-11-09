import type { Icon } from './types'

export const IconShare: Icon = ({
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
      data-slot='icon-ui-share'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.73 12h16.5v2.23c0 3.77 0 5.65-1.17 6.82-1.17 1.18-3.06 1.18-6.83 1.18h-.5c-3.77 0-5.66 0-6.83-1.18-1.17-1.17-1.17-3.05-1.17-6.82z'
        fill='currentColor'
      />
      <path
        d='M20.23 12v2.23c0 3.77 0 5.65-1.17 6.82-1.17 1.18-3.06 1.18-6.83 1.18h-.5c-3.77 0-5.66 0-6.83-1.18-1.17-1.17-1.17-3.05-1.17-6.82V12'
        stroke='currentColor'
      />
      <path
        d='m17.1 6.13-2.28-2.3h0c-1.34-1.33-2-2-2.83-2s-1.5.67-2.83 2l-2.3 2.3'
        stroke='currentColor'
      />
      <path d='M11.98 16V2.68' stroke='currentColor' />
    </svg>
  )
}
