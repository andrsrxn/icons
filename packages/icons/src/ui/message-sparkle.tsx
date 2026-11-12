import type { Icon } from './types'

export const IconMessageSparkle: Icon = ({
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
      data-slot='icon-ui-message-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12.43 21.86a9.8 9.8 0 0 0 9.8-9.8c0-1.48-1.58-5.1-1.58-5.1l-1.22 1.6c-.62.82-.93 1.23-1.37 1.27s-.81-.3-1.57-1l-.36-.33c-.72-.65-1.07-.98-1.09-1.4 0-.43.33-.77 1-1.47l1.5-1.52a7.5 7.5 0 0 0-5.1-1.86 9.8 9.8 0 0 0-9.81 9.8q.01 1.24.14 2.03c.11.78.17 1.17.16 1.38v.05c-.02.2-.1.47-.25.99l-.08.24c-.71 2.39-1.07 3.59-.54 4.37a2 2 0 0 0 .36.4c.71.62 1.94.4 4.4-.03.33-.05.5-.08.64-.08h.1c.14 0 .33.03.71.1.88.14 2.44.36 4.16.36'
        fill='currentColor'
      />
      <path
        d='M22.23 12.06a9.8 9.8 0 0 1-9.8 9.8c-1.72 0-3.28-.22-4.16-.36h0a4 4 0 0 0-.72-.1h-.09c-.15 0-.31.03-.64.09-2.46.42-3.69.64-4.4.02a2 2 0 0 1-.36-.4c-.53-.78-.17-1.98.54-4.37l.08-.24h0c.15-.52.23-.78.25-.99v-.05c.01-.2-.05-.6-.16-1.38q-.13-.79-.14-2.02a9.8 9.8 0 0 1 8.7-9.74s1.5-.17 2.43 0'
        stroke='currentColor'
      />
      <path d='M18 2.46c0 2.23-2.4 4.66-4.66 4.66' stroke='currentColor' />
      <path d='M18 2.46c0 2.24 2.42 4.66 4.66 4.66' stroke='currentColor' />
      <path d='M18 11.78c0-2.2-2.42-4.66-4.66-4.66' stroke='currentColor' />
      <path d='M18 11.78c0-2.22 2.45-4.66 4.66-4.66' stroke='currentColor' />
    </svg>
  )
}
