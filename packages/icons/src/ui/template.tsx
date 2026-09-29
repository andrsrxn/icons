import type { Icon } from './types'

export const IconTemplate: Icon = ({
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
      data-slot='icon-ui-template'
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
        d='M4.75 7.8c0-2.83 0-4.24.88-5.12s2.29-.88 5.12-.88h2.5c2.83 0 4.24 0 5.12.88s.88 2.29.88 5.12v8.4c0 2.83 0 4.24-.88 5.12s-2.29.88-5.12.88h-2.5c-2.83 0-4.24 0-5.12-.88s-.88-2.29-.88-5.12zm7.86-1.58a.7.7 0 0 0-.75.34l-2.5 4.36a1.5 1.5 0 0 0 .81 2.16 1.5 1.5 0 0 1 1.01 1.56l-.2 2.16a.87.87 0 0 0 1.61.5l2.39-4.18c.51-.9.1-2.05-.88-2.42a1.7 1.7 0 0 1-1.09-1.73L13.2 7a.7.7 0 0 0-.58-.77'
        fill='currentColor'
      />
      <rect
        width='14.5'
        height='20.4'
        rx='3'
        transform='matrix(-1 0 0 1 19.25 1.8)'
        stroke='currentColor'
      />
      <path
        d='m9.06 11.04 1.63-2.63c.9-1.45 1.35-2.17 1.65-2.26a.8.8 0 0 1 .88.33c.17.27.03 1.11-.26 2.8-.07.4-.1.6-.06.77a.8.8 0 0 0 .32.45c.15.1.35.14.75.2l.21.04c.86.15 1.3.22 1.49.5q.08.12.12.26c.08.33-.16.7-.62 1.44l-1.62 2.58c-.98 1.55-1.47 2.33-1.81 2.4a.8.8 0 0 1-.8-.3c-.2-.29-.05-1.2.27-3 .07-.45.11-.68.06-.86a1 1 0 0 0-.3-.41c-.16-.12-.39-.15-.84-.21h0l-.1-.02c-.78-.1-1.17-.17-1.36-.39a1 1 0 0 1-.19-.4c-.04-.3.16-.63.58-1.3'
        stroke='currentColor'
      />
    </svg>
  )
}
