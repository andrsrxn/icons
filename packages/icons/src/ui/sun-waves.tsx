import type { Icon } from './types'

export const IconSunWaves: Icon = ({
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
      data-slot='icon-ui-sun-waves'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='11.97'
        cy='12.31'
        r='4.78'
        transform='rotate(90 11.97 12.31)'
        fill='currentColor'
      />
      <path d='M1.45 12.31H4.2' stroke='currentColor' />
      <path d='M19.83 12.33h2.72' stroke='currentColor' />
      <path d='M11.95 4.58v-2.7' stroke='currentColor' />
      <path d='m18.06 6.13 2.04-2.04' stroke='currentColor' />
      <path d='M5.76 6.04 3.8 4.09' stroke='currentColor' />
      <path
        d='M1.5 17.99c.81-.57 3.12-1.56 6.24-1.56 3.11 0 6.84 2 9.88 2 3.03 0 4.44-1.08 5.03-1.67'
        stroke='currentColor'
      />
      <path
        d='M3.98 20.85a9.4 9.4 0 0 1 4.9-.86c2.41.16 5.19 1.87 7.54 2.02 2.34.16 3.32-.44 3.97-.8'
        stroke='currentColor'
      />
      <path
        d='M12.05 17.19c2.6 0 4.7-2.14 4.7-4.75a4.72 4.72 0 1 0-6.66 4.28'
        stroke='currentColor'
      />
    </svg>
  )
}
