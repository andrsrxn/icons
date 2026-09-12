import type { Icon } from './types'

export const IconCurrencyEth: Icon = ({
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
      data-slot='icon-ui-currency-eth'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m10.96 21.88-6.48-8.8a.5.5 0 0 1 .49-.79l6.98 1.24h.18l6.5-1.23a.5.5 0 0 1 .5.77l-6.07 8.8a.5.5 0 0 1-.41.21h-1.28a.5.5 0 0 1-.4-.2'
        fill='currentColor'
      />
      <path d='M12 2.2v19.75' stroke='currentColor' />
      <path d='M4.56 12.07S9 13.63 12 13.63s7.44-1.56 7.44-1.56' stroke='currentColor' />
      <path
        d='m5.37 9.7 3.36-4.77c1.49-2.1 2.23-3.16 3.27-3.16s1.78 1.05 3.27 3.16l3.36 4.76h0c.79 1.12 1.18 1.67 1.18 2.31s-.39 1.2-1.18 2.3h0l-3.36 4.77c-1.49 2.1-2.23 3.16-3.27 3.16s-1.78-1.05-3.27-3.16l-3.36-4.76c-.79-1.12-1.18-1.67-1.18-2.31s.39-1.2 1.18-2.3'
        stroke='currentColor'
      />
    </svg>
  )
}
