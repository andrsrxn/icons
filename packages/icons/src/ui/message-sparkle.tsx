import type { Icon } from './types'

export const IconMessageSparkle: Icon = ({
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
      data-slot='icon-ui-message-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12.43 21.86a9.8 9.8 0 0 0 9.8-9.8c0-1.48-.7-4-1.67-5.4-1.67 1.67-2.42 3.91-5.25 1.3-2.38-2.2 1.7-4.3 1.7-4.3a8.5 8.5 0 0 0-4.58-1.4 9.8 9.8 0 0 0-9.8 9.8q.01 1.23.14 2.02a10 10 0 0 1 .16 1.43c-.02.2-.1.47-.25.99l-.08.24c-.71 2.39-1.07 3.59-.54 4.37a2 2 0 0 0 .36.4c.71.62 1.94.4 4.4-.02a5 5 0 0 1 .73-.1c.15 0 .34.04.72.1.88.15 2.44.37 4.16.37'
        fill='currentColor'
      />
      <path
        d='M22.23 12.06a9.8 9.8 0 0 1-9.8 9.8c-1.72 0-3.28-.22-4.16-.36a4 4 0 0 0-.72-.1h-.09c-.15 0-.31.03-.64.09-2.46.42-3.69.64-4.4.02a2 2 0 0 1-.36-.4c-.53-.78-.17-1.98.54-4.37l.08-.24a6 6 0 0 0 .25-1.04c.01-.2-.05-.6-.16-1.38q-.13-.79-.14-2.02a9.8 9.8 0 0 1 8.7-9.74s.81-.1 1.25-.1'
        stroke='currentColor'
      />
      <path d='M12.73 6.38c2.34 0 4.85-2.54 4.85-4.86' stroke='currentColor' />
      <path d='M22.44 6.38c-2.34 0-4.86-2.53-4.86-4.86' stroke='currentColor' />
      <path d='M12.73 6.38c2.32 0 4.85 2.56 4.85 4.85' stroke='currentColor' />
      <path d='M22.44 6.38c-2.3 0-4.86 2.53-4.86 4.85' stroke='currentColor' />
    </svg>
  )
}
