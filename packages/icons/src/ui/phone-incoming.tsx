import type { Icon } from './types'

export const IconPhoneIncoming: Icon = ({
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
      data-slot='icon-ui-phone-incoming'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M10.77 14.2 9.7 13.15c-.78-.78-1.17-1.17-1.31-1.65a2 2 0 0 1-.09-.67c.02-.5.3-.97.86-1.92.43-.73.65-1.09.7-1.48a2 2 0 0 0 0-.55c-.05-.4-.26-.76-.69-1.49L7.8 3.01c-.46-.81-.7-1.21-1.1-1.32s-.8.12-1.61.58l-1.13.64c-.46.26-.7.39-.93.68s-.3.48-.41.83c-.63 1.97-1.21 6.7 4.48 12.39 5.68 5.68 10.4 5.1 12.39 4.49.35-.12.53-.17.83-.41s.43-.48.69-.94l.63-1.14c.46-.8.69-1.21.58-1.6s-.5-.64-1.31-1.1l-2.4-1.4c-.72-.42-1.08-.63-1.47-.68a2 2 0 0 0-.58 0c-.39.06-.74.27-1.46.7-.93.56-1.4.84-1.9.86a2 2 0 0 1-.7-.08c-.47-.15-.85-.53-1.62-1.3'
        fill='currentColor'
      />
      <path
        d='M19.93 9.3h-1.21c-1.89 0-2.83 0-3.42-.59-.59-.58-.59-1.53-.59-3.41V4.08'
        stroke='currentColor'
      />
      <path d='m20.95 2.98-5.09 5.09' stroke='currentColor' />
      <path
        d='m10.02 13.46.43.43c.54.54.8.8 1.1.99a3 3 0 0 0 2.5.3c.33-.1.66-.3 1.32-.68.33-.2.5-.3.67-.37a2 2 0 0 1 1.37 0c.18.05.35.15.69.35l1.53.9c1.16.67 1.75 1 2.01 1.53a2 2 0 0 1 .22.8c.04.59-.3 1.17-.95 2.35-.18.31-.27.47-.46.66a2 2 0 0 1-.86.51c-1.88.64-6.7 1.38-12.5-4.43S2.03 6.18 2.67 4.3c.08-.22.11-.32.26-.54.05-.08.19-.24.25-.31.2-.19.35-.27.66-.45C5 2.34 5.6 2 6.18 2.04a2 2 0 0 1 .81.22c.52.27.86.85 1.53 2.01L9.4 5.8c.2.34.3.52.37.7a2 2 0 0 1 0 1.34c-.07.17-.17.35-.38.7-.4.66-.6 1-.7 1.33a3 3 0 0 0 .32 2.47c.18.3.46.57 1 1.13'
        stroke='currentColor'
      />
    </svg>
  )
}
