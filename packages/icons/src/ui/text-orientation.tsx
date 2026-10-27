import type { Icon } from './types'

export const IconTextOrientation: Icon = ({
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
      data-slot='icon-ui-text-orientation'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M5.58 16.74 3.41 8.05C2.7 5.3 2.37 3.9 3.02 3.52c.66-.37 1.68.62 3.72 2.62l6.4 6.23'
        stroke='currentColor'
      />
      <path d='m9.18 8.7-4.8 2.77' stroke='currentColor' />
      <path
        d='m20.46 15.76.55-2.01c.24-.91.36-1.37.16-1.73-.21-.36-.67-.48-1.58-.72l-2.02-.55'
        stroke='currentColor'
      />
      <path d='m5.6 21 15.16-8.75' stroke='currentColor' />
    </svg>
  )
}
