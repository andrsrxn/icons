import type { Icon } from './types'

export const IconUserBackgroundSparkle: Icon = ({
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
      data-slot='icon-ui-user-background-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.3 4.75v14.03c0 1.4-1.12 2.53-2.52 2.53a.6.6 0 0 1-.59-.41l-1.11-2.93c-.1-.26-.15-.4-.23-.5a2 2 0 0 0-.42-.37l-1.1-.85c-.73-.55-1.09-.83-1.15-1.23s.2-.77.73-1.51l.61-.87c.31-.44.47-.67.5-.92.03-.26-.08-.51-.3-1.01l-.78-1.86c-.25-.6-.38-.89-.63-1.06-.25-.16-.57-.16-1.21-.16h-1.96c-.47 0-.7 0-.9.1s-.36.28-.66.64l-.9 1.11c-.35.45-.53.67-.57.94s.07.53.28 1.06l.9 2.23c.26.66.39.99.3 1.3-.08.33-.35.55-.9 1L7.4 17.05c-.24.2-.36.3-.44.42a2 2 0 0 0-.22.57l-.8 2.8a.7.7 0 0 1-.63.47 2.6 2.6 0 0 1-2.63-2.63V10.7c0-3.77 0-5.65 1.18-6.82C5.03 2.7 6.91 2.7 10.68 2.7h8.12l-.34.64-1.8 1 1.8.92.95 2.06.93-2.06z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M15.82 11.4a3.82 3.82 0 1 0-7.64 0 3.82 3.82 0 0 0 7.64 0' stroke='currentColor' />
      <path d='M6.08 21.14a5.92 5.92 0 0 1 11.85 0' stroke='currentColor' />
      <path d='M19.34 1.46c0 1.5-1.62 3.13-3.13 3.13' stroke='currentColor' />
      <path d='M19.34 1.46c0 1.5 1.62 3.13 3.13 3.13' stroke='currentColor' />
      <path d='M19.34 7.72c0-1.48-1.63-3.13-3.13-3.13' stroke='currentColor' />
      <path d='M19.34 7.72c0-1.5 1.64-3.13 3.13-3.13' stroke='currentColor' />
      <path
        d='M12.5 2.6h-2.08c-3.77 0-5.66 0-6.83 1.17S2.42 6.83 2.42 10.6v3.17c0 3.77 0 5.65 1.17 6.83s3.06 1.17 6.83 1.17h3.16c3.77 0 5.66 0 6.83-1.17 1.17-1.18 1.17-3.06 1.17-6.83V11.1'
        stroke='currentColor'
      />
    </svg>
  )
}
