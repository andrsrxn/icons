import type { Icon } from './types'

export const IconWifiLock: Icon = ({
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
      data-slot='icon-ui-wifi-lock'
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
      <rect x='16.01' y='14.7' width='6.41' height='4.78' rx='1' stroke='currentColor' />
      <path d='m21.02 14.7-.16-1.35a1.63 1.63 0 0 0-3.24-.01l-.18 1.36' stroke='currentColor' />
      <path d='M7.28 15.12a7.7 7.7 0 0 1 5.82-1.6' stroke='currentColor' />
      <path d='M4.1 11.95A13 13 0 0 1 12 9.17q2.3.02 4.03.65' stroke='currentColor' />
      <rect
        opacity='.2'
        width='5.01'
        height='6.31'
        rx='1'
        transform='matrix(0 -1 -1 0 22.39 19.71)'
        fill='currentColor'
      />
    </svg>
  )
}
