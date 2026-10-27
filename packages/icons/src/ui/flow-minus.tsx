import type { Icon } from './types'

export const IconFlowMinus: Icon = ({
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
      data-slot='icon-ui-flow-minus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.54 8.18c-1.18 0-1.77 0-2.18-.31L2.1 7.6c-.32-.4-.32-1-.32-2.18s0-1.76.31-2.17q.12-.15.27-.26c.4-.32.98-.32 2.16-.33h.5l.36.02c.45.03.68.04.87.11.4.14.73.44.9.84.07.18.1.4.16.86v.93c0 1.18 0 1.78-.32 2.18q-.1.15-.26.26c-.4.32-1 .32-2.19.32'
        fill='currentColor'
      />
      <path
        d='M7.3 5.42c0 1.18 0 1.78-.3 2.18q-.12.15-.27.26c-.4.32-1 .32-2.19.32-1.18 0-1.77 0-2.18-.32L2.1 7.6c-.32-.4-.32-1-.32-2.18s0-1.78.32-2.19q.1-.15.26-.26c.4-.32 1-.32 2.18-.32s1.78 0 2.19.32q.15.12.26.26c.32.4.32 1 .32 2.19'
        stroke='currentColor'
      />
      <path
        d='M8.74 12.01h-.41c-1.68 0-2.52 0-3.08-.47l-.23-.24c-.48-.56-.48-1.4-.48-3.07'
        stroke='currentColor'
      />
      <path d='M15.36 11.99h.2c1.88 0 2.83 0 3.41.58.59.59.59 1.54.59 3.43' stroke='currentColor' />
      <circle cx='12.05' cy='12.01' r='3.31' stroke='currentColor' />
      <path d='M17.12 20.05H22' stroke='currentColor' />
    </svg>
  )
}
