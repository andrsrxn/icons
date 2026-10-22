import type { Icon } from './types'

export const IconCurrencySol: Icon = ({
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
      data-slot='icon-ui-currency-sol'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M19.67 2.71H6.47c-.2 0-.3 0-.4.04a1 1 0 0 0-.3.26L3.6 5.22c-.7.72-1.06 1.09-.93 1.4s.64.3 1.65.3h13.2c.2 0 .3 0 .4-.04.09-.04.16-.12.3-.26L20.4 4.4c.7-.73 1.06-1.09.93-1.4s-.64-.3-1.65-.3'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M4.33 9.9h13.2c.2 0 .3 0 .4.04.09.03.16.1.3.26l2.16 2.2c.7.73 1.06 1.1.93 1.4s-.64.3-1.65.3H6.47c-.2 0-.3 0-.4-.04-.09-.03-.16-.1-.3-.26L3.6 11.6c-.7-.73-1.06-1.1-.93-1.4s.64-.3 1.65-.3'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M19.67 17.08H6.47c-.2 0-.3 0-.4.04-.09.04-.16.12-.3.26L3.6 19.6c-.7.73-1.06 1.09-.93 1.4s.64.3 1.65.3h13.2c.2 0 .3 0 .4-.04a1 1 0 0 0 .3-.26l2.16-2.21c.7-.72 1.06-1.09.93-1.4s-.64-.3-1.65-.3'
        fill='currentColor'
      />
      <path
        d='M6.48 2.71h13.2c1 0 1.5 0 1.64.3.13.31-.23.67-.93 1.4l-2.15 2.2c-.15.15-.22.23-.31.27-.1.04-.2.04-.4.04H4.32c-1.01 0-1.52 0-1.65-.3-.13-.31.23-.68.93-1.4l2.15-2.2c.15-.16.22-.23.31-.27.1-.04.2-.04.4-.04'
        stroke='currentColor'
      />
      <path
        d='M17.52 9.9H4.32c-1 0-1.5 0-1.64.3s.23.67.93 1.4l2.15 2.2c.15.15.22.23.31.26.1.04.2.04.4.04h13.2c1.01 0 1.52 0 1.65-.3s-.23-.67-.93-1.4l-2.15-2.2a1 1 0 0 0-.31-.26c-.1-.04-.2-.04-.4-.04'
        stroke='currentColor'
      />
      <path
        d='M6.48 17.08h13.2c1 0 1.5 0 1.64.3.13.31-.23.68-.93 1.4l-2.15 2.2c-.15.16-.22.23-.31.27-.1.04-.2.04-.4.04H4.32c-1.01 0-1.52 0-1.65-.3-.13-.31.23-.67.93-1.4l2.15-2.2c.15-.15.22-.23.31-.27.1-.04.2-.04.4-.04'
        stroke='currentColor'
      />
    </svg>
  )
}
