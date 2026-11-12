import type { Icon } from './types'

export const IconSeekForwardTenRtl: Icon = ({
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
      data-slot='icon-ui-seek-forward-ten-rtl'
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
        d='m7.1 9.93.77-.49c.68-.43 1.02-.65 1.28-.5.26.14.26.54.26 1.34v5.62'
        stroke='currentColor'
      />
      <path
        d='M17.04 12.4c0 2-.52 3.63-2.34 3.63s-2.33-1.62-2.33-3.63.6-3.63 2.33-3.63c1.74 0 2.34 1.63 2.34 3.63'
        stroke='currentColor'
      />
    </svg>
  )
}
