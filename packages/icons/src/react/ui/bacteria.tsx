import type { Icon } from './types'

export const IconBacteria: Icon = ({
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
      data-slot='icon-ui-bacteria'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.9 6.2c-1.35-3.23-5.36-4.62-8.18-2.54a4.4 4.4 0 0 0-1.66 5.07 27 27 0 0 0 3.38 6.33 27 27 0 0 0 5.04 5.09 4.4 4.4 0 0 0 5.34-.09c2.82-2.08 2.69-6.32 0-8.56a16 16 0 0 1-2.4-2.35 15 15 0 0 1-1.53-2.95m2.85 9.76a1.9 1.9 0 1 1-3.77-.57 1.9 1.9 0 0 1 3.77.57'
        fill='currentColor'
      />
      <path
        d='M9.26 6.8a.6.6 0 1 1-.65-1.02.6.6 0 0 1 .65 1.02'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M9.11 10.63a.5.5 0 1 1-.55-.85.5.5 0 0 1 .55.85'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M3.92 8.35a4.4 4.4 0 0 1 1.25-4.7C8 .96 12.67 2.4 13.99 6.08c.47 1.3.96 2.42 1.42 3.06.46.62 1.34 1.38 2.4 2.17 3.06 2.3 3.19 7.08-.07 9.1a4.4 4.4 0 0 1-5.04-.1 27 27 0 0 1-5.26-5.26 27 27 0 0 1-3.52-6.71'
        stroke='currentColor'
      />
      <path d='m14.98 2.3-1.87 1.27' stroke='currentColor' />
      <path d='M19.55 9.04 18 10.8' stroke='currentColor' />
      <path d='m22.22 14.51-2.2.37' stroke='currentColor' />
      <path d='m11.94 20.52-1.57 1.94' stroke='currentColor' />
      <path d='m5.57 13.41-2.42 1.28' stroke='currentColor' />
      <path d='m16.78 6.5-1.45.7' stroke='currentColor' />
      <path d='m8.66 17.24-1.13 1.22' stroke='currentColor' />
      <path d='M3.66 8.93H1.54' stroke='currentColor' />
      <circle
        cx='14.86'
        cy='15.68'
        r='1.91'
        transform='rotate(8.58 14.86 15.68)'
        stroke='currentColor'
      />
    </svg>
  )
}
