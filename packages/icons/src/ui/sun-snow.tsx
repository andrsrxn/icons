import type { Icon } from './types'

export const IconSunSnow: Icon = ({
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
      data-slot='icon-ui-sun-snow'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m15.12 3.44.3 1.1c.24.92.36 1.38.72 1.58s.81.09 1.72-.16l1.11-.3'
        stroke='currentColor'
      />
      <path
        d='m15.12 20.52.3-1.1c.24-.92.36-1.38.72-1.58s.81-.09 1.72.15l1.11.3'
        stroke='currentColor'
      />
      <path d='M15.78 12h6.42' stroke='currentColor' />
      <path d='m17.6 3.65-3.27 5.57' stroke='currentColor' />
      <path d='m17.6 20.3-3.27-5.64' stroke='currentColor' />
      <path d='m21.22 9.86-.72.72c-.67.67-1 1-1 1.42s.33.75 1 1.41l.72.73' stroke='currentColor' />
      <path opacity='.2' d='M10.8 16.12a4.13 4.13 0 0 1 0-8.27z' fill='currentColor' />
      <path d='M10.8 16.12a4.13 4.13 0 0 1 0-8.27' stroke='currentColor' />
      <path d='M1.7 11.99h2.39' stroke='currentColor' />
      <path d='M10.78 21.04v-2.29' stroke='currentColor' />
      <path d='M10.78 5.3V2.96' stroke='currentColor' />
      <path d='m3.83 18.88 1.52-1.53' stroke='currentColor' />
      <path d='M5.42 6.56 3.74 4.88' stroke='currentColor' />
    </svg>
  )
}
