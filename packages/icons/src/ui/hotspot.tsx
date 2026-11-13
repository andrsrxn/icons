import type { Icon } from './types'

export const IconHotspot: Icon = ({
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
      data-slot='icon-ui-hotspot'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M4.65 20.36a10.28 10.28 0 1 1 14.7 0' stroke='currentColor' />
      <path d='M7.33 17.7a6.53 6.53 0 1 1 9.33 0' stroke='currentColor' />
      <path d='M9.2 13.17a2.8 2.8 0 1 1 5.6 0 2.8 2.8 0 0 1-5.6 0' stroke='currentColor' />
      <path
        opacity='.2'
        d='M9.2 13.17a2.8 2.8 0 0 0 2.8 2.8 2.8 2.8 0 1 0-2.8-2.8'
        fill='currentColor'
      />
    </svg>
  )
}
