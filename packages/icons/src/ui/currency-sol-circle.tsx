import type { Icon } from './types'

export const IconCurrencySolCircle: Icon = ({
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
      data-slot='icon-ui-currency-sol-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.78 11.98a10.22 10.22 0 1 0 20.44 0 10.22 10.22 0 0 0-20.44 0m15.1-5.43-1.9 3.7 2.18 3.2-1.76 3.63H6.74l2.23-3.63-1.9-3.2 1.9-3.7z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M9.2 6.78h7.21c.32 0 .47 0 .53.1s-.02.23-.19.5l-1.6 2.67q-.08.14-.13.17t-.22.02H7.6c-.32 0-.47 0-.53-.1s.02-.23.19-.5l1.6-2.67q.08-.14.13-.17t.22-.02'
        stroke='currentColor'
      />
      <path
        d='M9.2 13.71h7.21c.32 0 .47 0 .53.1q.08.13-.19.5l-1.6 2.67q-.08.14-.13.17-.06.04-.22.03H7.6c-.32 0-.47 0-.53-.1s.02-.24.19-.5l1.6-2.68q.08-.13.13-.16.06-.04.22-.03'
        stroke='currentColor'
      />
      <path
        d='M14.8 10.24H7.6c-.32 0-.47 0-.53.1s.02.24.19.51l1.6 2.67q.08.14.13.17t.22.02h7.21c.32 0 .47 0 .53-.1q.08-.13-.19-.5l-1.6-2.67q-.08-.14-.13-.17-.06-.04-.22-.03'
        stroke='currentColor'
      />
      <circle cx='12' cy='11.98' r='10.22' transform='rotate(90 12 11.98)' stroke='currentColor' />
    </svg>
  )
}
