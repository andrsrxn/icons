import type { Icon } from './types'

export const IconSunFog: Icon = ({
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
      data-slot='icon-ui-sun-fog'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M22.23 16.88H1.77' stroke='currentColor' />
      <path d='M18.5 19.75h-13' stroke='currentColor' />
      <path d='M15.03 22.51H8.97' stroke='currentColor' />
      <circle
        opacity='.2'
        cx='11.97'
        cy='12.31'
        r='4.67'
        transform='rotate(90 11.97 12.3)'
        fill='currentColor'
      />
      <path
        d='M10.45 16.81a4.8 4.8 0 0 1-3.15-4.5 4.67 4.67 0 0 1 9.34 0c0 1.94-1.4 3.9-3.15 4.5'
        stroke='currentColor'
      />
      <path d='M1.69 12.3h2.7' stroke='currentColor' />
      <path d='M19.65 12.32h2.66' stroke='currentColor' />
      <path d='M11.95 4.75V2.11' stroke='currentColor' />
      <path d='m17.93 6.26 1.99-1.99' stroke='currentColor' />
      <path d='M5.9 6.18 4 4.28' stroke='currentColor' />
    </svg>
  )
}
