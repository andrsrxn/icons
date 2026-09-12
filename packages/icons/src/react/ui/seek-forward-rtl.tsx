import type { Icon } from './types'

export const IconSeekForwardRtl: Icon = ({
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
      data-slot='icon-ui-seek-forward-rtl'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M3.67 6.13a11.1 11.1 0 0 1 9.56-3.67 9.6 9.6 0 1 1-9.18 15.2'
        stroke='currentColor'
      />
      <rect x='12.55' y='9.35' width='4.13' height='6.75' rx='2' stroke='currentColor' />
      <path
        d='M6.85 7.22H5.7c-1.41 0-2.12 0-2.56-.44S2.7 5.63 2.7 4.22V3.07'
        stroke='currentColor'
      />
      <path
        d='m6.3 11.74 1.6-1.45c.71-.65 1.07-.98 1.37-.85s.3.62.3 1.59V16'
        stroke='currentColor'
      />
    </svg>
  )
}
