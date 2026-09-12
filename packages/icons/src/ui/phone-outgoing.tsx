import type { Icon } from './types'

export const IconPhoneOutgoing: Icon = ({
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
      data-slot='icon-ui-phone-outgoing'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m10.76 14.22-1.08-1.07c-.78-.78-1.17-1.17-1.31-1.65a2 2 0 0 1-.09-.67c.02-.5.3-.97.87-1.92.43-.73.64-1.1.7-1.5a2 2 0 0 0 0-.53c-.05-.4-.27-.77-.7-1.5L7.78 3c-.46-.8-.7-1.21-1.1-1.32-.4-.1-.8.12-1.6.58l-1.15.65c-.46.26-.69.39-.93.68s-.3.47-.4.83c-.63 1.97-1.22 6.7 4.48 12.41s10.43 5.12 12.4 4.5c.37-.12.55-.18.84-.42.3-.24.43-.47.7-.94l.63-1.14c.46-.8.69-1.21.58-1.6s-.51-.64-1.32-1.1l-2.4-1.4a4 4 0 0 0-1.48-.69 2 2 0 0 0-.57 0c-.39.06-.75.28-1.47.7-.93.57-1.4.85-1.9.87a2 2 0 0 1-.7-.08c-.47-.15-.85-.54-1.62-1.3'
        fill='currentColor'
      />
      <path
        d='m10.76 14.22-1.08-1.07c-.78-.78-1.17-1.17-1.31-1.65a2 2 0 0 1-.09-.67c.02-.5.3-.97.87-1.92.43-.73.64-1.1.7-1.5a2 2 0 0 0 0-.53c-.05-.4-.27-.77-.7-1.5L7.78 3c-.46-.8-.7-1.21-1.1-1.32-.4-.1-.8.12-1.6.58l-1.15.65c-.46.26-.69.39-.93.68s-.3.47-.4.83c-.63 1.97-1.22 6.7 4.48 12.41s10.43 5.12 12.4 4.5c.37-.12.55-.18.84-.42.3-.24.43-.47.7-.94l.63-1.14c.46-.8.69-1.21.58-1.6s-.51-.64-1.32-1.1l-2.4-1.4a4 4 0 0 0-1.48-.69 2 2 0 0 0-.57 0c-.39.06-.75.28-1.47.7-.93.57-1.4.85-1.9.87a2 2 0 0 1-.7-.08c-.47-.15-.85-.54-1.62-1.3'
        stroke='currentColor'
      />
      <path
        d='M15.89 2.78h1.21c1.9 0 2.84 0 3.42.58.59.59.59 1.53.59 3.42V8'
        stroke='currentColor'
      />
      <path d='M14.87 9.1 19.96 4' stroke='currentColor' />
    </svg>
  )
}
