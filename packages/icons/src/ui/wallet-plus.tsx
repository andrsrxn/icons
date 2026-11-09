import type { Icon } from './types'

export const IconWalletPlus: Icon = ({
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
      data-slot='icon-ui-wallet-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='m4.23 3.16-3 4.39h18.6l-3.1-4.22z' fill='currentColor' />
      <path
        d='M10.18 20.21h5.78c2.17 0 3.26 0 4.1-.41a4 4 0 0 0 1.82-1.82c.4-.84.4-1.93.4-4.1s0-3.26-.4-4.1a4 4 0 0 0-1.83-1.82c-.83-.41-1.92-.41-4.1-.41H6.73c-.76 0-1.14 0-1.46.05a4 4 0 0 0-3.3 3.31c-.06.32-.06.7-.06 1.46'
        stroke='currentColor'
      />
      <path
        d='M1.9 12.07v-2.5c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h6.16c1.74 0 2.61 0 3.32.43.71.42 1.13 1.19 1.96 2.72l.17.33'
        stroke='currentColor'
      />
      <path
        d='M18.44 13.88a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M1.77 17.55H7.7' stroke='currentColor' />
      <path d='M4.73 20.53v-5.95' stroke='currentColor' />
    </svg>
  )
}
