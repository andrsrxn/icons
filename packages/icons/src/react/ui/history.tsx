import type { Icon } from './types'

export const IconHistory: Icon = ({
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
      data-slot='icon-ui-history'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='11.67' cy='11.59' r='9.55' fill='currentColor' />
      <path
        d='m15.47 15.8-2.4-1.6c-.88-.58-1.31-.87-1.55-1.32-.24-.44-.24-.96-.24-2v-3.5'
        stroke='currentColor'
      />
      <path
        d='M3.67 6.13a11.1 11.1 0 0 1 9.56-3.66 9.59 9.59 0 1 1-9.18 15.2'
        stroke='currentColor'
      />
      <path
        d='M6.85 7.22H5.71c-1.41 0-2.12 0-2.56-.43-.44-.44-.44-1.15-.44-2.57V3.08'
        stroke='currentColor'
      />
    </svg>
  )
}
