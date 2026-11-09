import type { Icon } from './types'

export const IconRouteMapBox: Icon = ({
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
      data-slot='icon-ui-route-map-box'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='4.56' cy='18.84' r='2.89' fill='currentColor' />
      <circle cx='4.56' cy='18.84' r='2.89' stroke='currentColor' />
      <path
        d='M7.43 18.84h10.1a2.53 2.53 0 0 0 .4-5.04L5.7 11.83a2.45 2.45 0 0 1 .4-4.88h6.16'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M18.88 9.95c-1.31 0-1.97 0-2.45-.3a2 2 0 0 1-.66-.65c-.3-.48-.3-1.14-.3-2.45 0-1.3 0-1.96.3-2.44a2 2 0 0 1 .66-.66c.48-.3 1.14-.3 2.45-.3 1.3 0 1.96 0 2.44.3q.41.25.66.66c.3.48.3 1.13.3 2.44s0 1.97-.3 2.45a2 2 0 0 1-.66.66c-.48.3-1.13.3-2.44.3'
        fill='currentColor'
      />
      <path
        d='M18.88 9.95c1.3 0 1.96 0 2.44-.3a2 2 0 0 0 .66-.65c.3-.48.3-1.14.3-2.45v0c0-1.3 0-1.96-.3-2.44a2 2 0 0 0-.66-.66c-.48-.3-1.13-.3-2.44-.3v0c-1.31 0-1.97 0-2.45.3a2 2 0 0 0-.66.66c-.3.48-.3 1.13-.3 2.44v0c0 1.31 0 1.97.3 2.45q.26.41.66.66c.48.3 1.14.3 2.45.3'
        stroke='currentColor'
      />
      <path d='M18.88 3.15v3.08' stroke='currentColor' />
    </svg>
  )
}
