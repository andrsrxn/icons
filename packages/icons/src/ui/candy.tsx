import type { Icon } from './types'

export const IconCandy: Icon = ({
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
      data-slot='icon-ui-candy'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m5 12.36 5.35 5.35c.67.67 1 1 1.42 1s.74-.33 1.41-1l4.86-4.86c.67-.67 1-1 1-1.42s-.33-.74-1-1.41l-3.93-3.94c-.67-.66-1-1-1.42-1s-.75.34-1.41 1z'
        fill='currentColor'
      />
      <path
        d='M15.67 7.07c-1.3-.9-1.95-1.35-2.65-1.45a3 3 0 0 0-1.38.12c-.67.23-1.23.78-2.35 1.9L7.81 9.13c-1.08 1.07-1.61 1.61-1.84 2.25a3 3 0 0 0-.14 1.45c.1.68.53 1.3 1.39 2.56.2.3.3.45.43.59q.13.16.28.28c.13.12.28.22.59.43 1.3.9 1.96 1.34 2.66 1.44a3 3 0 0 0 1.32-.11c.68-.22 1.24-.77 2.37-1.87l1.44-1.4c1.15-1.12 1.72-1.68 1.95-2.36a3 3 0 0 0 .14-1.4c-.1-.7-.56-1.36-1.48-2.67-.2-.3-.3-.44-.43-.58l-.25-.25c-.13-.12-.28-.22-.57-.42'
        stroke='currentColor'
      />
      <path
        d='m17.97 9.67 2.83-.82c.85-.25 1.27-.38 1.33-.68.05-.31-.3-.57-1.03-1.1l-.3-.22a1 1 0 0 1-.3-.26c-.06-.09-.07-.19-.1-.4l-.24-1.46c-.05-.35-.08-.53-.2-.64-.11-.12-.29-.14-.64-.2l-1.42-.21c-.22-.04-.32-.05-.41-.1a1 1 0 0 1-.27-.33l-.23-.34c-.53-.77-.79-1.16-1.1-1.1s-.44.5-.7 1.4l-.82 2.94'
        stroke='currentColor'
      />
      <path
        d='m9.8 17.75-.94 3.09c-.25.83-.38 1.25-.69 1.3s-.56-.3-1.07-1l-.25-.34a1 1 0 0 0-.26-.3 1 1 0 0 0-.4-.1l-1.46-.24c-.35-.05-.53-.08-.64-.2-.12-.11-.14-.29-.2-.64l-.21-1.42c-.04-.22-.05-.32-.1-.41s-.15-.15-.33-.27l-.38-.26c-.75-.51-1.13-.77-1.08-1.08s.49-.44 1.36-.7l3.06-.9'
        stroke='currentColor'
      />
      <path d='M10.26 10.54v3.17' stroke='currentColor' />
      <path d='M13.35 9v5.56' stroke='currentColor' />
    </svg>
  )
}
