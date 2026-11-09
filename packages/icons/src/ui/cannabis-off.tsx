import type { Icon } from './types'

export const IconCannabisOff: Icon = ({
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
      data-slot='icon-ui-cannabis-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.5 12.82c.27-.23.4-.35.5-.48a1 1 0 0 0 .11-.74c-.03-.15-.12-.3-.3-.61L3.72 7.42l-.07-.13a1 1 0 0 1 .26-1.22l.13-.1.1-.06a1 1 0 0 1 1.04-.01l.1.06 3.97 2.68.83-3.68.09-.31.15-.28.06-.1c.73-1.22 1.1-1.82 1.63-1.85h.1c.54.03.9.64 1.62 1.86.1.17.16.26.19.36v.02c.04.1.05.2.07.41l.03.3c.16 1.59.24 2.38.75 2.62l.12.05c.54.17 1.14-.35 2.34-1.4l.03-.03c.17-.14.26-.22.36-.27l.1-.05c.1-.04.22-.06.45-.1l.27-.04c.78-.12 1.17-.18 1.45-.05a1 1 0 0 1 .51.56c.1.28.02.66-.16 1.44q-.04.18-.07.25l-.07.16-.15.2-1.54 1.99c-.31.4-.47.6-.52.82a1 1 0 0 0 .06.6c.08.21.27.39.65.73l.57.5.16.16a1 1 0 0 1-.24 1.55l-.2.1h-.02l-.14.06-1.36.37q-.25.07-.34.12a1 1 0 0 0-.56.73c-.02.09-.02.18-.02.37 0 .4 0 .59-.04.72a1 1 0 0 1-1.21.7c-.13-.04-.3-.14-.64-.33l-1.53-.9c-.5-.28-.75-.43-1.02-.43s-.52.16-1.02.45l-1.58.95c-.35.22-.52.32-.65.36a1 1 0 0 1-1.25-.77c-.03-.13-.01-.34.02-.75q.02-.25.01-.35a1 1 0 0 0-.52-.8l-.33-.12-.71-.24c-.65-.23-.98-.34-1.14-.51a1 1 0 0 1-.21-1.07c.09-.23.35-.45.87-.9'
        fill='currentColor'
      />
      <path d='M12 16.3v6.05' stroke='currentColor' />
      <path
        d='M12 16.11a11 11 0 0 1-4.09 2.71.37.37 0 0 1-.5-.36c.03-.68.12-1.65.3-2.42a.5.5 0 0 0-.4-.59c-.94-.08-2.48-.34-3.41-.83a.33.33 0 0 1-.1-.5 5.7 5.7 0 0 1 3.6-1.95'
        stroke='currentColor'
      />
      <path
        d='M16.6 12.17a5.7 5.7 0 0 1 3.58 1.94c.14.16.1.4-.09.5q-.48.26-1.1.43'
        stroke='currentColor'
      />
      <path
        d='M12 16.11a11 11 0 0 0 4.08 2.71c.25.1.52-.1.5-.36-.02-.6-.1-1.4-.26-2.14'
        stroke='currentColor'
      />
      <path
        d='M16.64 12.17c.86-.4 1.52-.84 2.67-2.6a10 10 0 0 0 1.35-3.32.46.46 0 0 0-.57-.54 10 10 0 0 0-3.53 1.57c-1.23.97-2.2 1.96-2.52 2.5'
        stroke='currentColor'
      />
      <path
        d='M7.36 12.17c-.86-.4-1.53-.84-2.67-2.6a10 10 0 0 1-1.35-3.32.46.46 0 0 1 .57-.54c.8.2 1.87.53 2.78 1.03'
        stroke='currentColor'
      />
      <path
        d='M14.03 9.73c.27-1.34.46-2.08 0-4.25a12 12 0 0 0-1.6-3.67.5.5 0 0 0-.85 0c-.58.94-1.31 2.28-1.62 3.67-.1.4-.07.4-.11.76'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
