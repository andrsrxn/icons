import type { Icon } from './types'

export const IconDeskDevicePc: Icon = ({
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
      data-slot='icon-ui-desk-device-pc'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.62 14.08c.55 0 .83 0 1.04-.1a1 1 0 0 0 .44-.45c.11-.21.11-.49.11-1.04s0-.83-.1-1.04a1 1 0 0 0-.45-.45c-.21-.1-.49-.1-1.04-.1H5.38c-.55 0-.83 0-1.04.1a1 1 0 0 0-.44.45c-.11.21-.11.49-.11 1.04s0 .83.1 1.04q.16.3.45.44c.21.11.49.11 1.04.11z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M18.8 20.48c.38 0 .57 0 .73-.05a1 1 0 0 0 .63-.63c.05-.15.05-.34.05-.73s0-.57-.05-.72a1 1 0 0 0-.63-.63c-.16-.06-.35-.06-.73-.06h-3.2c-.39 0-.58 0-.73.06a1 1 0 0 0-.63.63c-.05.15-.05.34-.05.72 0 .39 0 .58.05.73q.16.47.63.63c.15.05.34.05.73.05z'
        fill='currentColor'
      />
      <path
        d='M20.21 22.25V12.9c0-.95 0-1.42-.3-1.71-.29-.3-.76-.3-1.7-.3H5.65c-.94 0-1.41 0-1.7.3s-.3.76-.3 1.7v9.36'
        stroke='currentColor'
      />
      <path d='M13.85 14.3v2.34c0 1.89 0 2.83.59 3.42s1.53.58 3.41.58h2.36' stroke='currentColor' />
      <path d='M3.79 14.3h16.42' stroke='currentColor' />
      <path d='M2.3 10.9h19.4' stroke='currentColor' />
      <path d='M13.85 17.44h6.36' stroke='currentColor' />
      <rect
        opacity='.2'
        x='4.03'
        y='1.75'
        width='8.97'
        height='6.01'
        rx='1.5'
        fill='currentColor'
      />
      <rect x='4.03' y='1.75' width='8.97' height='6.01' rx='1.5' stroke='currentColor' />
      <path d='M8.51 10.67v-2.9' stroke='currentColor' />
    </svg>
  )
}
