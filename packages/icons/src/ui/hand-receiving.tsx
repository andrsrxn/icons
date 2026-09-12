import type { Icon } from './types'

export const IconHandReceiving: Icon = ({
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
      data-slot='icon-ui-hand-receiving'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='1.71' y='7.51' width='4.21' height='8.89' rx='1' fill='currentColor' />
      <path
        d='M5.92 14.9a8 8 0 0 0 2.95 1.45c3.47.85 5.24.61 8.3-.52 2.3-.84 4.1-3.12 4.97-4.42l-.08.13a2.2 2.2 0 0 0 .12-2.03l-.06-.1a1.94 1.94 0 0 0-3.08-.51l-.14.13c-1.07.96-2.44 2.1-3.78 2.92-.82.5-2.52.4-4.13.4m4.13-.4c.66-1.76.47-3.17-.26-3.44-1.4-.53-2.6-.7-4.23-.7-3.92 0-4.7.97-4.7.97'
        stroke='currentColor'
      />
      <rect x='1.71' y='7.51' width='4.21' height='8.89' rx='1' stroke='currentColor' />
    </svg>
  )
}
