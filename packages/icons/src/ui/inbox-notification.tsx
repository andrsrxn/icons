import type { Icon } from './types'

export const IconInboxNotification: Icon = ({
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
      data-slot='icon-ui-inbox-notification'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M4.3 6.04c.48-1.25.72-1.87 1.23-2.23s1.18-.35 2.51-.35h7.63v2.86l2 2.15 2.76-.76.88 2.43c.44 1.22.67 1.83.37 2.26s-.95.43-2.25.43h-.71c-.78 0-1.17 0-1.52.14s-.64.4-1.21.93l-.27.25c-.57.53-.85.8-1.2.94-.36.14-.75.14-1.53.14H11c-.77 0-1.16 0-1.52-.14-.35-.14-.63-.4-1.2-.94L8 13.9c-.57-.53-.85-.8-1.2-.93-.36-.14-.75-.14-1.53-.14h-.66c-1.32 0-1.98 0-2.28-.44-.3-.43-.06-1.04.4-2.28z'
        fill='currentColor'
      />
      <path
        d='M11.95 3.7h-1.62c-2.9 0-4.35 0-5.42.8-1.07.81-1.47 2.2-2.27 5l-.66 2.27-.2.78-.04.32c-.02.2-.02.4-.02.8 0 2.69 0 4.03.61 5a4 4 0 0 0 1.25 1.25c.98.62 2.32.62 5 .62h6.99c2.54 0 3.8 0 4.75-.55a4 4 0 0 0 1.4-1.42c.56-.94.56-2.2.56-4.75 0-.45 0-.67-.02-.9l-.07-.42a8 8 0 0 0-.27-.86l-.37-1.08'
        stroke='currentColor'
      />
      <path
        d='M1.92 12.83h3.03c.68 0 1.01 0 1.34.05a4 4 0 0 1 1.18.4c.3.14.56.35 1.1.75l.15.11c.4.3.59.44.8.56a4 4 0 0 0 1.52.5c.23.03.47.03.96.03.52 0 .78 0 1.03-.03a4 4 0 0 0 1.49-.5c.22-.13.43-.29.84-.6l.1-.07h0c.5-.39.75-.58 1.03-.72a4 4 0 0 1 1.28-.44c.3-.04.62-.04 1.26-.04H22'
        stroke='currentColor'
      />
      <circle cx='18.53' cy='5.11' r='3.28' stroke='currentColor' />
    </svg>
  )
}
