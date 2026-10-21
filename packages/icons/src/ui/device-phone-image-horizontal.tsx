import type { Icon } from './types'

export const IconDevicePhoneImageHorizontal: Icon = ({
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
      data-slot='icon-ui-device-phone-image-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        x='22.25'
        y='18.61'
        width='20.5'
        height='13.22'
        rx='3'
        transform='rotate(180 22.25 18.61)'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M22.26 11.39c0-2.83 0-4.25-.88-5.13s-2.29-.87-5.12-.87H7.72c-2.83 0-4.25 0-5.12.87-.88.88-.88 2.3-.88 5.15 0 2.15 0 3.22.63 3.47s1.36-.52 2.82-2.07l1.5-1.59c.7-.75 1.06-1.13 1.51-1.12s.78.4 1.46 1.2l2.41 2.8c.57.68.86 1.01 1.25 1.06.39.04.74-.22 1.45-.74l1.14-.83c.56-.41.84-.62 1.17-.62s.6.2 1.17.6l.87.63c1.38 1 2.08 1.49 2.62 1.21s.54-1.13.54-2.84z'
        fill='currentColor'
      />
      <path
        d='M17.67 9.3a.46.46 0 1 1-.92 0 .46.46 0 0 1 .92 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m2.08 16.47 4.55-5.04c.77-.86 1.15-1.28 1.68-1.27s.88.46 1.58 1.35l2.01 2.54c.62.78.93 1.18 1.41 1.21s1.24-.63 2.04-1.3c.64-.54 1.18-.94 1.59-.95.41 0 .75.25 1.42.77l3.5 2.69'
        stroke='currentColor'
      />
    </svg>
  )
}
