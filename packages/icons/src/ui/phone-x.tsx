import type { Icon } from './types'

export const IconPhoneX: Icon = ({
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
      data-slot='icon-ui-phone-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M10.77 14.2 9.7 13.15c-.78-.78-1.17-1.17-1.31-1.65a2 2 0 0 1-.09-.67c.02-.5.3-.97.86-1.92.43-.73.65-1.09.7-1.48a2 2 0 0 0 0-.55c-.05-.4-.26-.76-.69-1.49L7.8 3c-.46-.8-.7-1.2-1.1-1.31s-.8.12-1.61.58l-1.13.64c-.46.26-.7.39-.93.68s-.3.47-.41.83c-.63 1.97-1.21 6.7 4.48 12.39 5.68 5.68 10.4 5.1 12.39 4.49.35-.12.53-.17.83-.41s.43-.48.69-.94l.64-1.14c.45-.8.68-1.21.57-1.6-.1-.4-.5-.64-1.31-1.1l-2.4-1.4a4 4 0 0 0-1.47-.68 2 2 0 0 0-.58 0c-.39.06-.74.27-1.46.7-.93.56-1.4.84-1.9.86a2 2 0 0 1-.7-.08c-.47-.15-.85-.53-1.62-1.3'
        fill='currentColor'
      />
      <path d='m15.14 8.6 5.21-5.22' stroke='currentColor' />
      <path d='m20.35 8.6-5.21-5.2' stroke='currentColor' />
      <path
        d='m10.04 13.46.43.43c.54.54.81.8 1.1.99a3 3 0 0 0 2.51.3c.33-.1.65-.3 1.3-.68.35-.2.51-.3.69-.37a2 2 0 0 1 1.37 0c.17.05.34.15.68.35l1.53.9c1.17.67 1.75 1 2.02 1.53a2 2 0 0 1 .22.8c.03.59-.3 1.17-.96 2.35-.18.31-.27.47-.45.66-.07.07-.23.2-.31.25-.22.15-.33.19-.55.26-1.89.64-6.7 1.38-12.5-4.43C1.3 11 2.06 6.18 2.7 4.3c.07-.22.1-.32.25-.54l.26-.31c.19-.19.34-.27.65-.45 1.17-.66 1.76-1 2.34-.96a2 2 0 0 1 .82.22c.51.27.85.85 1.53 2.01l.88 1.52c.2.34.3.52.36.7a2 2 0 0 1 0 1.34 7 7 0 0 1-.37.7c-.4.66-.6 1-.7 1.33a3 3 0 0 0 .31 2.47c.18.3.46.57 1.01 1.13'
        stroke='currentColor'
      />
    </svg>
  )
}
