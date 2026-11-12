import type { Icon } from './types'

export const IconTextOrientation: Icon = ({
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
      data-slot='icon-ui-text-orientation'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m20.46 15.76.55-2.01c.24-.91.36-1.37.16-1.73-.21-.36-.67-.48-1.58-.72l-2.02-.55'
        stroke='currentColor'
      />
      <path d='m5.6 21 15.16-8.75' stroke='currentColor' />
      <path d='m5.68 4.6 4.9 8.52' stroke='currentColor' />
      <path d='m12 12.3-2.82 1.63' stroke='currentColor' />
      <path
        d='M2.8 7.59a1.14 1.14 0 0 1 .42-1.57l4.9-2.83a1.14 1.14 0 0 1 1.57.42'
        stroke='currentColor'
      />
    </svg>
  )
}
