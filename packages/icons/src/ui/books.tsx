import type { Icon } from './types'

export const IconBooks: Icon = ({
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
      data-slot='icon-ui-books'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.76 3.88C7.76 2.84 8.6 2 9.64 2h8.68c1.88 0 2.82 0 3.41.59.59.58.59 1.52.59 3.41v6.43c0 1.07 0 1.6-.2 2.02a2 2 0 0 1-.94.93c-.4.2-.94.2-2 .2-1.02 0-1.53 0-1.93-.19a2 2 0 0 1-.93-.88c-.2-.38-.23-.9-.29-1.9l-.35-6.46-6.16-.4a1.9 1.9 0 0 1-1.76-1.87'
        fill='currentColor'
      />
      <path
        d='M1.76 19.19h7.76c3.1 0 4.64 0 5.65-.92l.23-.23c.91-1 .91-2.55.91-5.64 0-3.1 0-4.65-.9-5.65l-.24-.23c-1-.91-2.55-.91-5.65-.91h-.76c-3.3 0-4.95 0-5.98 1.02-1.02 1.03-1.02 2.68-1.02 5.98z'
        stroke='currentColor'
      />
      <path
        d='M16.32 15.58c2.33 0 3.5 0 4.36-.54a3.5 3.5 0 0 0 1.1-1.1c.54-.86.54-2.02.54-4.36v-.8c0-3.09 0-4.63-.91-5.63l-.24-.24C20.17 2 18.62 2 15.53 2h-4.35a3.5 3.5 0 0 0-3.42 3.4v.22'
        stroke='currentColor'
      />
      <path
        d='M1.76 19.19c0 .51 0 .77.04.98a2.5 2.5 0 0 0 2.03 2.03c.21.04.47.04.98.04h6.61c1.04 0 1.56 0 1.98-.15a2.5 2.5 0 0 0 1.49-1.5c.15-.4.15-.93.15-1.97'
        stroke='currentColor'
      />
      <path
        d='M15.06 18.63H18c.51 0 .77 0 .99-.04A2.5 2.5 0 0 0 21 16.56c.03-.21.03-.47.03-.98'
        stroke='currentColor'
      />
      <path d='M5.82 5.97v5.95' stroke='currentColor' />
      <path d='M11.82 2.36V5.6' stroke='currentColor' />
    </svg>
  )
}
