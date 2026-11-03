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
        d='M3.73 12h16.5v4.23c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88h-4.5c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M3.73 12v4.23c0 2.82 0 4.24.88 5.12s2.3.88 5.12.88h4.5c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V12'
        stroke='currentColor'
      />
      <path
        d='m17.1 6.13-2.28-2.3c-1.34-1.33-2-2-2.83-2s-1.5.67-2.83 2l-2.3 2.3'
        stroke='currentColor'
      />
      <path d='M11.98 16V2.68' stroke='currentColor' />
    </svg>
  )
}
