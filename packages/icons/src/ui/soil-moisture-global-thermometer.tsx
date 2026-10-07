import type { Icon } from './types'

export const IconSoilMoistureGlobalThermometer: Icon = ({
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
      data-slot='icon-ui-soil-moisture-global-thermometer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.48 19.07v-3.92c0-.42.37-.76.83-.76s.82.34.82.76v3.92s.72.72.72 1.34c0 .8-.69 1.43-1.54 1.43s-1.54-.64-1.54-1.43c0-.62.71-1.34.71-1.34'
        fill='currentColor'
      />
      <path
        d='M16.04 18.72c-.28.37-.67.96-.67 1.66 0 1.1.87 1.98 1.94 1.98s1.94-.89 1.94-1.98c0-.7-.31-1.2-.69-1.66'
        stroke='currentColor'
      />
      <path d='M18.56 18.72v-3.08a1.25 1.25 0 1 0-2.5 0v3.08' stroke='currentColor' />
      <path d='M21.47 8s-3.92.78-6.7 3.7a16.5 16.5 0 0 0-3.58 6.1' stroke='currentColor' />
      <path d='M21.47 8s-3.92.78-6.7 3.7a16.5 16.5 0 0 0-3.58 6.1' stroke='currentColor' />
      <path d='M21.53 11.82s-.74.14-1.54.67' stroke='currentColor' />
      <path d='M8.2 10.05C5.63 7.5 2.54 6.58 2.54 6.58' stroke='currentColor' />
      <path d='M6.29 12.49a10 10 0 0 0-3.73-2.29' stroke='currentColor' />
      <path d='M21.47 4.18s-5.46 1.09-9.3 5.13c-3.67 3.85-5 8.48-5 8.48' stroke='currentColor' />
      <path d='M10.14 7.33C6.68 3.9 2.53 2.66 2.53 2.66' stroke='currentColor' />
    </svg>
  )
}
