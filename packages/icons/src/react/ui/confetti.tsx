import type { Icon } from './types'

export const IconConfetti: Icon = ({
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
      data-slot='icon-ui-confetti'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.95 16c-.55.48-.82.73-1.16.75s-.64-.17-1.26-.57l-3.68-2.4-.26-.19q-.07-.06-.21-.24L7.2 10.62c-.45-.57-.67-.85-.68-1.18-.01-.34.2-.63.62-1.22l.84-1.2c.6-.85.91-1.28 1.36-1.32.44-.05.83.3 1.61 1l6.02 5.4c.78.7 1.17 1.06 1.17 1.5 0 .45-.4.8-1.17 1.5z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M7.72 20.86q-.17.23-.26.31a1 1 0 0 1-.36.22c-.1.03-.2.04-.4.06l-2.29.26c-1.16.13-1.74.2-2.08-.14s-.27-.93-.13-2.08l.28-2.37.05-.32a1 1 0 0 1 .34-.5q.08-.07.27-.18c.21-.12.31-.18.42-.2a1 1 0 0 1 .8.08c.1.06.18.14.36.3l2.8 2.59c.3.27.46.41.54.57a1 1 0 0 1 .07.73c-.05.18-.17.34-.41.67'
        fill='currentColor'
      />
      <path
        d='M15.46 10.27c1.95 1.74 2.92 2.62 2.79 3.65-.13 1.04-1.28 1.65-3.6 2.87l-5.09 2.68c-4.36 2.3-6.54 3.45-7.58 2.46s0-3.23 2.1-7.7l2.4-5.11c1.05-2.25 1.58-3.38 2.57-3.58s1.9.64 3.74 2.32l1.34 1.21z'
        stroke='currentColor'
      />
      <path d='m19.33 4.67-2.27 2.27' stroke='currentColor' />
      <path d='M8.83 19.36 4.4 15.38' stroke='currentColor' />
      <path d='M13.87 16.94 6.5 9.91' stroke='currentColor' />
      <path d='M15.75 1.34c.1.39.13 1.2-.14 1.9a3.3 3.3 0 0 1-1.07 1.41' stroke='currentColor' />
      <path d='M22.68 8.28c-.4-.1-1.2-.14-1.9.11a3.4 3.4 0 0 0-1.44 1.06' stroke='currentColor' />
    </svg>
  )
}
