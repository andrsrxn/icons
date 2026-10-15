import type { Icon } from './types'

export const IconInboxNotification: Icon = ({
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
      data-slot='icon-ui-inbox-notification'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.3 6.04c.48-1.25.72-1.87 1.23-2.23s1.18-.35 2.51-.35h7.63v2.86l2.39 1.08h2.3l.98 2.76c.43 1.21.65 1.82.35 2.24s-.95.43-2.23.43h-.74c-.78 0-1.17 0-1.52.14s-.64.4-1.21.93l-.27.25c-.57.53-.85.8-1.2.94-.36.14-.75.14-1.53.14H11c-.77 0-1.16 0-1.52-.14-.35-.14-.63-.4-1.2-.94L8 13.9c-.57-.53-.85-.8-1.2-.93-.36-.14-.75-.14-1.53-.14h-.66c-1.32 0-1.98 0-2.28-.44-.3-.43-.06-1.04.4-2.28z'
        fill='currentColor'
      />
      <path
        d='M12.5 3.7H8.83c-2.17 0-3.26 0-4.06.6-.8.61-1.1 1.66-1.7 3.75l-1.11 3.84a4 4 0 0 0-.23 1.66v.99c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88h8.56c2.83 0 4.25 0 5.13-.88s.87-2.3.87-5.12v-.85c0-.5 0-.74-.04-.98-.03-.24-.11-.47-.27-.94l-.53-1.57'
        stroke='currentColor'
      />
      <path
        d='M22 12.83h-2.97c-.97 0-1.46 0-1.91.14l-.06.02a6 6 0 0 0-1.6 1.04l-.1.07c-.68.51-1.02.77-1.4.92l-.28.1c-.4.11-.83.11-1.68.11-.82 0-1.22 0-1.6-.1l-.33-.11c-.37-.15-.7-.4-1.35-.88l-.16-.12c-.8-.6-1.19-.89-1.65-1.04s-.95-.15-1.94-.15H1.92'
        stroke='currentColor'
      />
      <circle
        cx='18.53'
        cy='5.11'
        r='2.85'
        transform='rotate(90 18.53 5.11)'
        stroke='currentColor'
      />
    </svg>
  )
}
