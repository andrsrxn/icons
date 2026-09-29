import type { Icon } from './types'

export const IconWifiSettings: Icon = ({
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
      data-slot='icon-ui-wifi-settings'
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
      <path d='M7.28 15.12A7.7 7.7 0 0 1 12 13.45' stroke='currentColor' />
      <path d='M4.1 11.95a13 13 0 0 1 9.98-2.63' stroke='currentColor' />
      <path d='M1.66 8.33A17 17 0 0 1 12 4.7c4.6 0 7.8 1.6 10.34 3.64' stroke='currentColor' />
      <circle
        cx='18.8'
        cy='14.28'
        r='2.39'
        transform='rotate(-90 18.8 14.28)'
        stroke='currentColor'
      />
      <path d='m16.96 17.45.58-.95' stroke='currentColor' />
      <path d='m16.98 11.09.46.8' stroke='currentColor' />
      <path d='m20.62 17.49-.46-.8' stroke='currentColor' />
      <path d='m20.66 11.1-.63 1.01' stroke='currentColor' />
      <path d='m21.2 14.28 1.28-.02' stroke='currentColor' />
      <path d='M15.14 14.29h1.12' stroke='currentColor' />
    </svg>
  )
}
