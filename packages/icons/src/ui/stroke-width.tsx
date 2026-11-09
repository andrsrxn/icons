import type { Icon } from './types'

export const IconStrokeWidth: Icon = ({
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
      data-slot='icon-ui-stroke-width'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.38 20H2.64' stroke='currentColor' />
      <path
        opacity='.2'
        d='M19.81 15.67c.51 0 .76 0 .96-.09a1 1 0 0 0 .5-.5c.09-.19.09-.44.09-.95 0-.5 0-.76-.1-.96a1 1 0 0 0-.49-.5c-.2-.08-.45-.08-.96-.08H4.16c-.5 0-.76 0-.95.09a1 1 0 0 0-.5.5c-.09.2-.09.44-.09.95 0 .5 0 .76.1.96q.16.34.49.5c.2.08.45.08.95.08z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M19.01 8.7c.79 0 1.19 0 1.5-.15q.46-.24.7-.71c.15-.3.15-.7.15-1.5 0-.78 0-1.18-.15-1.48a1.5 1.5 0 0 0-.7-.72C20.2 4 19.8 4 19 4H4.97c-.8 0-1.19 0-1.5.14-.3.15-.56.4-.7.72-.15.3-.15.7-.15 1.49s0 1.18.15 1.49q.23.47.7.7c.31.15.7.15 1.5.15z'
        fill='currentColor'
      />
      <path
        d='M2.62 14.13c0 .5 0 .76.1.96q.16.34.49.5c.2.08.45.08.95.08h15.65c.51 0 .76 0 .96-.09a1 1 0 0 0 .5-.5c.09-.19.09-.44.09-.95v0c0-.5 0-.76-.1-.96a1 1 0 0 0-.49-.5c-.2-.08-.45-.08-.96-.08H4.16c-.5 0-.76 0-.95.09a1 1 0 0 0-.5.5c-.09.2-.09.44-.09.95'
        stroke='currentColor'
      />
      <path
        d='M2.62 6.35c0 .79 0 1.18.15 1.49q.23.47.7.7c.31.15.7.15 1.5.15H19c.79 0 1.19 0 1.5-.14q.46-.24.7-.71c.15-.3.15-.7.15-1.5v0c0-.78 0-1.18-.15-1.48a1.5 1.5 0 0 0-.7-.71C20.2 4 19.8 4 19 4H4.97c-.8 0-1.19 0-1.5.15-.3.14-.56.4-.7.7-.15.31-.15.7-.15 1.5'
        stroke='currentColor'
      />
    </svg>
  )
}
