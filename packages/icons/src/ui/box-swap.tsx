import type { Icon } from './types'

export const IconBoxSwap: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-box-swap'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M18.23 9.24V7.72c0-1.38 0-2.08-.33-2.57a2 2 0 0 0-.57-.58c-.5-.33-1.2-.33-2.58-.33'
        stroke='currentColor'
      />
      <path
        d='M5.68 14.7v1.56c0 1.34 0 2 .3 2.5a2 2 0 0 0 .63.62c.5.31 1.16.31 2.5.31'
        stroke='currentColor'
      />
      <path
        d='M20.85 7.96c-1.07 1.07-1.61 1.6-2.26 1.7a2 2 0 0 1-.6 0c-.65-.1-1.19-.63-2.26-1.7'
        stroke='currentColor'
      />
      <path
        d='M3.06 15.98c1.07-1.08 1.6-1.62 2.26-1.71a2 2 0 0 1 .6 0c.65.1 1.19.63 2.26 1.7'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M8.94 10.52H5.26a2.5 2.5 0 0 1-2.5-2.5V4.5A2.5 2.5 0 0 1 5.26 2h3.68a2.5 2.5 0 0 1 2.5 2.5v3.52a2.5 2.5 0 0 1-2.5 2.5'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M18.9 22.06h-3.7a2.5 2.5 0 0 1-2.5-2.5v-3.52a2.5 2.5 0 0 1 2.5-2.5h3.69a2.5 2.5 0 0 1 2.5 2.5v3.52a2.5 2.5 0 0 1-2.5 2.5'
        fill='currentColor'
      />
      <path
        d='M7.08 10.52c1.71 0 2.57 0 3.18-.4q.46-.3.75-.74c.4-.62.4-1.48.4-3.18v0c0-1.71 0-2.57-.4-3.18a3 3 0 0 0-.75-.75c-.61-.4-1.47-.4-3.18-.4v0c-1.7 0-2.56 0-3.18.4q-.45.3-.74.75c-.4.61-.4 1.47-.4 3.18v0c0 1.7 0 2.56.4 3.18q.3.45.74.74c.62.4 1.48.4 3.18.4'
        stroke='currentColor'
      />
      <path
        d='M17.04 22.06c1.7 0 2.56 0 3.18-.4q.45-.29.74-.74c.4-.62.4-1.48.4-3.18v0c0-1.71 0-2.56-.4-3.18a3 3 0 0 0-.74-.75c-.62-.4-1.48-.4-3.18-.4v0c-1.71 0-2.56 0-3.18.4q-.46.3-.75.75c-.4.62-.4 1.47-.4 3.18v0c0 1.7 0 2.56.4 3.18q.3.45.75.74c.62.4 1.47.4 3.18.4'
        stroke='currentColor'
      />
      <path d='M7.08 1.87v3.75' stroke='currentColor' />
      <path d='M17.04 13.41v3.75' stroke='currentColor' />
    </svg>
  )
}
