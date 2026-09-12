import type { Icon } from './types'

export const IconPhone: Icon = ({
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
      data-slot='icon-ui-phone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M10.77 14.3 9.7 13.21c-.78-.78-1.17-1.16-1.32-1.64a2 2 0 0 1-.08-.67c.02-.5.3-.98.86-1.92.43-.73.65-1.1.7-1.5a2 2 0 0 0 0-.54 4 4 0 0 0-.69-1.49L7.8 3.08c-.47-.8-.7-1.2-1.1-1.31s-.8.12-1.61.58l-1.14.64c-.46.26-.69.4-.93.68-.24.3-.3.48-.4.83-.63 1.97-1.22 6.7 4.47 12.4 5.69 5.68 10.42 5.11 12.4 4.49.36-.12.54-.17.83-.41.3-.24.43-.48.7-.94l.63-1.14c.46-.8.69-1.21.58-1.61s-.51-.63-1.32-1.1l-2.4-1.4c-.72-.41-1.08-.62-1.47-.68a2 2 0 0 0-.57 0c-.4.06-.75.28-1.47.7-.93.57-1.4.85-1.9.87a2 2 0 0 1-.7-.08c-.47-.15-.85-.54-1.62-1.3'
        fill='currentColor'
      />
      <path
        d='M10.77 14.3 9.7 13.21c-.78-.78-1.17-1.16-1.32-1.64a2 2 0 0 1-.08-.67c.02-.5.3-.98.86-1.92h0c.43-.73.65-1.1.7-1.5a2 2 0 0 0 0-.54 4 4 0 0 0-.69-1.49L7.8 3.08c-.47-.8-.7-1.2-1.1-1.31s-.8.12-1.61.58l-1.14.64c-.46.26-.69.4-.93.68-.24.3-.3.48-.4.83-.63 1.97-1.22 6.7 4.47 12.4 5.69 5.68 10.42 5.11 12.4 4.49.36-.12.54-.17.83-.41.3-.24.43-.48.7-.94l.63-1.14c.46-.8.69-1.21.58-1.61s-.51-.63-1.32-1.1l-2.4-1.4c-.72-.41-1.08-.62-1.47-.68a2 2 0 0 0-.57 0c-.4.06-.75.28-1.47.7-.93.57-1.4.85-1.9.87a2 2 0 0 1-.7-.08c-.47-.15-.85-.54-1.62-1.3'
        stroke='currentColor'
      />
    </svg>
  )
}
