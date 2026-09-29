import type { Icon } from './types'

export const IconSeekForwardFiveRtl: Icon = ({
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
      data-slot='icon-ui-seek-forward-five-rtl'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.14 12a9.57 9.57 0 1 0 19.14 0 9.57 9.57 0 0 0-19.14 0'
        fill='currentColor'
      />
      <path
        d='M3.67 6.13a11.1 11.1 0 0 1 9.56-3.67 9.6 9.6 0 1 1-9.18 15.2'
        stroke='currentColor'
      />
      <path
        d='M6.85 7.22H5.7c-1.41 0-2.12 0-2.56-.44S2.7 5.63 2.7 4.22V3.07'
        stroke='currentColor'
      />
      <path
        d='M10.52 16.48h1.91a2.1 2.1 0 0 0 0-4.22h-2.17q0 0 0 0v-1.82c0-.77 0-1.16.2-1.42a1 1 0 0 1 .2-.2c.26-.2.65-.2 1.42-.2h2.02'
        stroke='currentColor'
      />
    </svg>
  )
}
