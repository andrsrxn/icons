import type { Icon } from './types'

export const IconCurrencyEthCircle: Icon = ({
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
      data-slot='icon-ui-currency-eth-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 22.31a10.31 10.31 0 1 1 0-20.62 10.31 10.31 0 0 1 0 20.62M17.37 12 12 13.4 6.72 12l4.14 7.06h2.02z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M12 5.06v14' stroke='currentColor' />
      <path d='M6.94 12.06s3.02 1.16 5.06 1.16 5.06-1.16 5.06-1.16' stroke='currentColor' />
      <path
        d='m8.63 8.49-.87 1.36c-.67 1.04-1 1.57-1 2.15s.33 1.1 1 2.15l.87 1.36c1.52 2.38 2.27 3.57 3.37 3.57s1.85-1.19 3.37-3.57l.87-1.36c.67-1.04 1-1.57 1-2.15s-.33-1.1-1-2.15l-.87-1.36C13.85 6.1 13.1 4.92 12 4.92s-1.85 1.19-3.37 3.57'
        stroke='currentColor'
      />
      <path d='M1.7 12a10.31 10.31 0 1 1 20.61 0A10.31 10.31 0 0 1 1.7 12' stroke='currentColor' />
    </svg>
  )
}
