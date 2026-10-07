import type { Icon } from './types'

export const IconMessageFaceSmile: Icon = ({
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
      data-slot='icon-ui-message-face-smile'
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
        d='M12.43 21.86a9.8 9.8 0 1 0-9.8-9.8q.01 1.23.14 2.02c.11.78.17 1.17.16 1.38v.05c-.02.2-.1.47-.25.99l-.08.24c-.71 2.39-1.07 3.59-.54 4.37a2 2 0 0 0 .36.4c.71.62 1.94.4 4.4-.03a5 5 0 0 1 .73-.08c.15 0 .34.03.72.1.88.14 2.44.36 4.16.36'
        fill='currentColor'
      />
      <path
        d='M12.43 21.86a9.8 9.8 0 1 0-9.8-9.8q.01 1.23.14 2.02c.11.78.17 1.17.16 1.38v.05c-.02.2-.1.47-.25.99h0l-.08.24c-.71 2.39-1.07 3.59-.54 4.37a2 2 0 0 0 .36.4c.71.62 1.94.4 4.4-.03a5 5 0 0 1 .73-.08c.15 0 .34.03.72.1h0c.88.14 2.44.36 4.16.36'
        stroke='currentColor'
      />
      <path
        d='M10.25 9.7a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.57 9.7a.77.77 0 1 1-1.53 0 .77.77 0 0 1 1.53 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M16.12 15.26a5 5 0 0 1-3.56 1.24A5.4 5.4 0 0 1 9 15.26' stroke='currentColor' />
    </svg>
  )
}
