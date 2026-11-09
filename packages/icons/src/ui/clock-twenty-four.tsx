import type { Icon } from './types'

export const IconClockTwentyFour: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-clock-twenty-four'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 22.25a10.25 10.25 0 1 0-9.79-7.2l1.24-.54 1.35.43v2.38l-1 .83a10.2 10.2 0 0 0 8.2 4.1'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M14.54 21.93a10.25 10.25 0 1 0-12.66-11.5' stroke='currentColor' />
      <path
        d='M12.6 5.7v3.9c0 1.04 0 1.57.24 2 .24.45.68.74 1.55 1.32l2.71 1.81'
        stroke='currentColor'
      />
      <path
        d='M1.62 15.44c.68-1.1 3.12-1.17 3.12.9 0 1.45-1.84 2.17-2.96 3.92-.2.3.04.68.4.68h2.64'
        stroke='currentColor'
      />
      <path
        d='M10.39 19.18v-2.34c0-1.4 0-2.1-.36-2.2-.37-.11-.74.48-1.49 1.66h0l-.85 1.34c-.43.68-.64 1.02-.5 1.28s.55.26 1.35.26zm0 0v1.76m0-1.76h.93'
        stroke='currentColor'
      />
    </svg>
  )
}
