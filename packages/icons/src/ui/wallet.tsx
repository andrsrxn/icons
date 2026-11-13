import type { Icon } from './types'

export const IconWallet: Icon = ({
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
      data-slot='icon-ui-wallet'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m16.73 3.33-13.1.13-1.58 1.96v3.62L5.5 7.55h14.35z'
        fill='currentColor'
      />
      <path
        d='M1.9 13.88c0-2.65 0-3.98.68-4.9q.32-.43.74-.75c.93-.68 2.26-.68 4.91-.68h7.73c2.65 0 3.98 0 4.9.68q.43.32.75.74c.68.93.68 2.26.68 4.91v0c0 2.65 0 3.98-.68 4.9q-.32.43-.75.75c-.92.68-2.25.68-4.9.68H8.23c-2.65 0-3.98 0-4.9-.68a4 4 0 0 1-.75-.74c-.68-.93-.68-2.26-.68-4.91'
        stroke='currentColor'
      />
      <path
        d='M1.9 12.07v-2.5c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h6.17c1.74 0 2.6 0 3.31.42s1.13 1.19 1.96 2.72l.58 1.06'
        stroke='currentColor'
      />
      <path
        d='M18.44 13.88a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
