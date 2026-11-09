import type { Icon } from './types'

export const IconMessageOff: Icon = ({
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
      data-slot='icon-ui-message-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12.43 21.86a9.8 9.8 0 1 0-9.8-9.8q.01 1.23.14 2.02a10 10 0 0 1 .16 1.43c-.02.2-.1.47-.25.99l-.08.24c-.71 2.39-1.07 3.59-.54 4.37a2 2 0 0 0 .36.4c.71.62 1.94.4 4.4-.02a5 5 0 0 1 .73-.1c.15 0 .34.04.72.1.88.15 2.44.37 4.16.37'
        fill='currentColor'
      />
      <path d='m2.76 2.76 18.48 18.48' stroke='currentColor' />
      <path
        d='M5.31 5.32a9.8 9.8 0 0 0-2.68 6.74q.01 1.24.14 2.02a10 10 0 0 1 .16 1.43c-.02.2-.1.47-.25.99h0l-.08.24c-.71 2.39-1.07 3.59-.54 4.37a2 2 0 0 0 .36.4c.71.62 1.94.4 4.4-.02a5 5 0 0 1 .73-.1c.15 0 .34.04.72.1.88.15 2.44.37 4.16.37a9.8 9.8 0 0 0 6.74-2.68'
        stroke='currentColor'
      />
      <path d='M21.17 16.5A9.8 9.8 0 0 0 8 3.32' stroke='currentColor' />
    </svg>
  )
}
