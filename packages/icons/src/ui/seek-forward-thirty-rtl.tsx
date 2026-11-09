import type { Icon } from './types'

export const IconSeekForwardThirtyRtl: Icon = ({
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
      data-slot='icon-ui-seek-forward-thirty-rtl'
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
        d='M17.59 12.33c0 1.95-.5 3.54-2.28 3.54s-2.28-1.59-2.28-3.54c0-1.96.59-3.54 2.28-3.54s2.28 1.58 2.28 3.54'
        stroke='currentColor'
      />
      <path
        d='M7.05 14.97c.8 1.3 3.7 1.4 3.7-1.07 0-1.25-.96-1.6-2-1.63.92-.02 1.78-.46 1.78-1.63 0-2.32-2.73-2.23-3.48-1'
        stroke='currentColor'
      />
    </svg>
  )
}
