import type { Icon } from './types'

export const IconUsb: Icon = ({
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
      data-slot='icon-ui-usb'
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
        d='M6.53 11.7c0-1.88 0-2.82.58-3.4.59-.6 1.53-.6 3.42-.6h2.94c1.89 0 2.83 0 3.42.6.58.58.58 1.52.58 3.4v5.2c0 1.36 0 2.05-.16 2.6a4 4 0 0 1-2.7 2.7c-.55.17-1.24.17-2.61.17v0c-1.37 0-2.06 0-2.62-.17a4 4 0 0 1-2.69-2.7c-.16-.55-.16-1.24-.16-2.6z'
        stroke='currentColor'
      />
      <path d='M11.27 4.72h1.46' stroke='currentColor' />
    </svg>
  )
}
