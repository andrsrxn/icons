import type { Icon } from './types'

export const IconWalletPlus: Icon = ({
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
      data-slot='icon-ui-wallet-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='m4.23 3.16-3 4.39h18.6l-3.1-4.22z' fill='currentColor' />
      <path
        d='M1.9 12.37c0-1.7 0-2.55.33-3.2a3 3 0 0 1 1.3-1.29c.64-.33 1.49-.33 3.19-.33h9.57c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v.66c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88h-6.11'
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
