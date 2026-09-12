import type { Icon } from './types'

export const IconMessageChannel: Icon = ({
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
      data-slot='icon-ui-message-channel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.43 21.86a9.8 9.8 0 1 0-9.8-9.8q.01 1.24.14 2.02a10 10 0 0 1 .16 1.43c-.02.2-.1.47-.25.99l-.08.24c-.71 2.39-1.07 3.59-.54 4.37a2 2 0 0 0 .36.4c.71.62 1.94.4 4.4-.02a5 5 0 0 1 .73-.1c.15 0 .34.04.72.1.88.15 2.44.37 4.16.37m.14-7.2a2.66 2.66 0 1 1 0-5.32 2.66 2.66 0 0 1 0 5.32'
        fill='currentColor'
      />
      <path
        d='M12.43 21.86a9.8 9.8 0 1 0-9.8-9.8q.01 1.24.14 2.02a10 10 0 0 1 .16 1.43c-.02.2-.1.47-.25.99h0l-.08.24c-.71 2.39-1.07 3.59-.54 4.37a2 2 0 0 0 .36.4c.71.62 1.94.4 4.4-.02a5 5 0 0 1 .73-.1c.15 0 .34.04.72.1h0c.88.15 2.44.37 4.16.37'
        stroke='currentColor'
      />
      <circle cx='12.57' cy='12' r='2.66' transform='rotate(90 12.57 12)' stroke='currentColor' />
      <path d='M7.83 7.7a6 6 0 0 0-1.5 4.3c0 1.78.4 2.9 1.5 4.3' stroke='currentColor' />
      <path d='M17.16 7.7a6 6 0 0 1 1.49 4.3c0 1.78-.4 2.9-1.5 4.3' stroke='currentColor' />
    </svg>
  )
}
