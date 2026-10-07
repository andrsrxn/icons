import type { Icon } from './types'

export const IconUsbCheck: Icon = ({
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
      data-slot='icon-ui-usb-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='6.53'
        y='7.35'
        width='10.95'
        height='15.01'
        rx='2'
        fill='currentColor'
      />
      <path
        d='M15.78 7.7V5.53c0-1.68 0-2.51-.47-3.07l-.24-.24c-.56-.47-1.4-.47-3.07-.47s-2.51 0-3.07.47l-.24.24c-.47.56-.47 1.4-.47 3.07V7.7'
        stroke='currentColor'
      />
      <path
        d='M11.64 22.37c-1.04 0-1.55 0-1.98-.1a4 4 0 0 1-3.04-3.03c-.1-.43-.1-.95-.1-1.99v-5.54c0-1.89 0-2.83.6-3.42.58-.58 1.52-.58 3.4-.58h2.95c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v1.76'
        stroke='currentColor'
      />
      <path d='M11.27 4.72h1.46' stroke='currentColor' />
      <path
        d='m14.15 19 .16.19c.72.9 1.08 1.36 1.57 1.36.48 0 .84-.46 1.56-1.37l2.07-2.63'
        stroke='currentColor'
      />
    </svg>
  )
}
