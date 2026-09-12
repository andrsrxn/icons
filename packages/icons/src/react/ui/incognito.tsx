import type { Icon } from './types'

export const IconIncognito: Icon = ({
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
      data-slot='icon-ui-incognito'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='6.69'
        cy='16.74'
        r='2.92'
        transform='rotate(90 6.69 16.74)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M8.32 4.12 3.9 10.5l8.1-.66 8.66.66-4.7-6.38L12 5.52z'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='17.23'
        cy='16.74'
        r='2.92'
        transform='rotate(90 17.23 16.74)'
        fill='currentColor'
      />
      <path
        d='m3.37 10.77 2.7-4.42c.67-1.12 1.01-1.68 1.53-1.93a2 2 0 0 1 .6-.2c.58-.07 1.17.2 2.36.73.63.28.95.42 1.28.45h.37c.33-.03.64-.17 1.27-.45 1.2-.54 1.79-.8 2.36-.72a2 2 0 0 1 .6.19c.52.25.86.81 1.54 1.93l2.7 4.42'
        stroke='currentColor'
      />
      <path d='M9.97 16.74c.7-.4 1.23-.53 2.08-.53s1.37.13 2.08.53' stroke='currentColor' />
      <path d='M9.97 16.74a3.1 3.1 0 0 1-3.1 3.1 3.1 3.1 0 1 1 3.1-3.1' stroke='currentColor' />
      <path d='M20.33 16.74a3.1 3.1 0 0 1-3.1 3.1 3.1 3.1 0 1 1 3.1-3.1' stroke='currentColor' />
      <path d='M22.43 11.31A35 35 0 0 0 12 9.84c-3.88 0-7.47.54-10.43 1.47' stroke='currentColor' />
    </svg>
  )
}
