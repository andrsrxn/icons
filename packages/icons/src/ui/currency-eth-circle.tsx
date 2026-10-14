import type { Icon } from './types'

export const IconCurrencyEthCircle: Icon = ({
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
      data-slot='icon-ui-currency-eth-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 22.31a10.31 10.31 0 1 1 0-20.62 10.31 10.31 0 0 1 0 20.62M17.37 12 12 13.4 6.72 12l4.14 7.06h2.02z'
        fill='currentColor'
      />
      <path d='M12 5.06v14' stroke='currentColor' />
      <path d='M6.94 12.06s3.02 1.16 5.06 1.16 5.06-1.16 5.06-1.16' stroke='currentColor' />
      <path
        d='m7.76 9.85.87-1.36C10.15 6.1 10.9 4.92 12 4.92s1.85 1.19 3.37 3.57l.87 1.36c.67 1.04 1 1.57 1 2.15s-.33 1.1-1 2.15l-.87 1.36c-1.52 2.38-2.27 3.57-3.37 3.57s-1.85-1.19-3.37-3.57l-.87-1.36c-.67-1.04-1-1.57-1-2.15s.33-1.1 1-2.15'
        stroke='currentColor'
      />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
    </svg>
  )
}
