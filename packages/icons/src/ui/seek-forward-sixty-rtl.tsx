import type { Icon } from './types'

export const IconSeekForwardSixtyRtl: Icon = ({
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
      data-slot='icon-ui-seek-forward-sixty-rtl'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse opacity='.2' cx='11.66' cy='12' rx='10.24' ry='10.15' fill='currentColor' />
      <path
        d='m3.1 3.07-.25 1.17c-.23 1.09-.35 1.63-.08 2.04s.8.53 1.9.76l1.17.25'
        stroke='currentColor'
      />
      <path
        d='M2.73 16.68A10.15 10.15 0 1 0 13.87 2.1C8.4.93 4.92 4.76 3.46 6.06'
        stroke='currentColor'
      />
      <path
        d='M6.87 14c.14.92.87 1.87 1.9 1.87 1.04 0 1.87-.84 1.87-1.87s-.7-1.85-1.74-1.86A2 2 0 0 0 6.87 14m0 0a5.3 5.3 0 0 1 .53-3.4 3.8 3.8 0 0 1 2.28-1.92'
        stroke='currentColor'
      />
      <path
        d='M17.54 12.33c0 1.95-.51 3.54-2.28 3.54s-2.28-1.59-2.28-3.54c0-1.96.59-3.54 2.28-3.54s2.28 1.58 2.28 3.54'
        stroke='currentColor'
      />
    </svg>
  )
}
