import type { Icon } from './types'

export const IconDevicePhoneRotate: Icon = ({
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
      data-slot='icon-ui-device-phone-rotate'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='4.07'
        y='16.33'
        width='15.51'
        height='9.62'
        rx='2'
        transform='rotate(-60 4.07 16.33)'
        fill='currentColor'
      />
      <rect
        x='4.07'
        y='16.33'
        width='15.51'
        height='9.62'
        rx='2'
        transform='rotate(-60 4.07 16.33)'
        stroke='currentColor'
      />
      <path d='m15.84 8.8-2.8-1.62' stroke='currentColor' />
      <path
        d='m18.79 16.78-.56.47c-.8.66-1.18 1-1.2 1.44s.35.8 1.08 1.52l.52.52'
        stroke='currentColor'
      />
      <path
        d='m5.21 6.8.56-.47c.8-.66 1.18-.99 1.2-1.43s-.35-.8-1.08-1.52l-.52-.52'
        stroke='currentColor'
      />
      <path
        d='M21.21 11.8a4.4 4.4 0 0 1 1.08 4.23 3.77 3.77 0 0 1-4.62 2.66'
        stroke='currentColor'
      />
      <path
        d='M2.79 11.78A4.4 4.4 0 0 1 1.7 7.56a3.77 3.77 0 0 1 4.62-2.67'
        stroke='currentColor'
      />
    </svg>
  )
}
