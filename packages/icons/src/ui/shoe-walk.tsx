import type { Icon } from './types'

export const IconShoeWalk: Icon = ({
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
      data-slot='icon-ui-shoe-walk'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m2.4 9.82 2.53-5.69a.5.5 0 0 1 .73-.21l2.81 1.83q.15.1.32.08l4.55-.43a.5.5 0 0 1 .5.3l1.03 2.4.11.17 6.72 6.47a.5.5 0 0 1-.35.86h-6.79l-.2-.04-11.7-5.08a.5.5 0 0 1-.26-.66'
        fill='currentColor'
      />
      <path
        d='M8.29 5.74a4 4 0 0 1-1.86-1.67c-.26-.45-1.19-.52-1.4-.05l-3.15 7.07a2 2 0 0 0 1 2.64l10.45 4.71a2 2 0 0 0 .82.18h6.02a2 2 0 0 0 1.8-1.14l.03-.05a3.1 3.1 0 0 0-.87-3.73 63 63 0 0 1-5.7-5.03 6 6 0 0 1-1.18-2.35 1.3 1.3 0 0 0-1.66-.85c-1.2.44-2.96.87-4.3.27Z'
        stroke='currentColor'
      />
      <path d='m2.58 10.01 10.94 5.26c.4.2.61.3.83.34s.45.05.9.05h6.61' stroke='currentColor' />
      <path d='M14.78 7.93c-.41.46-.68.7-1.2 1.01s-.85.46-1.43.6' stroke='currentColor' />
      <path d='M16.68 10c-.2.38-.34.6-.64.91s-.5.48-.87.7' stroke='currentColor' />
      <path d='M2.25 18.62h17.48' stroke='currentColor' />
    </svg>
  )
}
