import type { Icon } from './types'

export const IconWallet: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-wallet'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='m4.97 4-2.7 3.96h16.77l-2.8-3.8z' fill='currentColor' />
      <rect
        width='11.41'
        height='18.38'
        rx='3'
        transform='matrix(0 -1 -1 0 21.25 19.37)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.87 12.03v-1.66c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h4.62c1.73 0 2.6 0 3.3.42l.02.01c.7.42 1.12 1.18 1.94 2.7'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.78 13.66a.63.63 0 1 1-1.26 0 .63.63 0 0 1 1.26 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
