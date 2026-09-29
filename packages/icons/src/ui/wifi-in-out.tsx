import type { Icon } from './types'

export const IconWifiInOut: Icon = ({
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
      data-slot='icon-ui-wifi-in-out'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M12.96 18.36a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M1.66 8.33A17 17 0 0 1 12 4.7c4.6 0 7.8 1.6 10.34 3.64' stroke='currentColor' />
      <path d='M20.42 11.34v5.34' stroke='currentColor' />
      <path
        d='m22.48 15.38-.64.65c-.67.67-1 1-1.42 1s-.74-.33-1.41-1l-.65-.65'
        stroke='currentColor'
      />
      <path
        d='m17.5 11.28-.65-.65c-.66-.67-1-1-1.41-1s-.75.33-1.42 1l-.65.65'
        stroke='currentColor'
      />
      <path d='M15.44 15.22v-5.08' stroke='currentColor' />
      <path d='M7.28 15.12a8 8 0 0 1 2.98-1.45' stroke='currentColor' />
      <path d='M4.1 11.95a13 13 0 0 1 6.85-2.74' stroke='currentColor' />
    </svg>
  )
}
