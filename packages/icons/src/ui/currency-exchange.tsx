import type { Icon } from './types'

export const IconCurrencyExchange: Icon = ({
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
      data-slot='icon-ui-currency-exchange'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='11.95' cy='12.07' r='9.41' fill='currentColor' />
      <path
        d='M14.95 9.28c-.25-.8-1.41-1.43-2.78-1.43S9.3 8.4 9.3 10.01c0 3.18 5.47.7 5.72 3.84.12 1.5-1.46 2.3-2.86 2.3s-2.41-.63-2.86-1.46'
        stroke='currentColor'
      />
      <path d='M12.17 7.85V6.84' stroke='currentColor' />
      <path d='M12.17 17.16v-1.01' stroke='currentColor' />
      <path d='M3.5 15.96c1.91 3.4 4.63 5.49 8.92 5.49s7.13-3.06 8.3-5.49' stroke='currentColor' />
      <path
        d='M20.65 8.17c-1.92-3.4-5.1-5.48-8.93-5.48-4.15 0-6.86 2.76-8.55 5.48'
        stroke='currentColor'
      />
      <path
        d='m17.91 8.48 1.16.3c1.08.3 1.62.44 2.04.2.43-.25.57-.79.86-1.87l.31-1.16'
        stroke='currentColor'
      />
      <path
        d='m1.7 18.35.33-1.27c.32-1.19.48-1.78.95-2.05s1.06-.12 2.24.2l1.28.34'
        stroke='currentColor'
      />
    </svg>
  )
}
