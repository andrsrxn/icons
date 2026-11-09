import type { Icon } from './types'

export const IconInboxOff: Icon = ({
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
      data-slot='icon-ui-inbox-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M4.3 6.04c.48-1.25.72-1.87 1.23-2.23s1.18-.35 2.51-.35h8.08c1.36 0 2.04 0 2.56.36.51.37.74 1.01 1.2 2.3l1.45 4.03c.43 1.22.65 1.83.35 2.25-.3.43-.94.43-2.23.43h-.73c-.78 0-1.17 0-1.52.14s-.64.4-1.21.93l-.27.25c-.57.53-.85.8-1.2.94-.36.14-.75.14-1.53.14H11c-.77 0-1.16 0-1.52-.14-.35-.14-.63-.4-1.2-.94L8 13.9c-.57-.53-.85-.8-1.2-.93-.36-.14-.75-.14-1.53-.14h-.66c-1.32 0-1.98 0-2.28-.44-.3-.43-.06-1.04.4-2.28z'
        fill='currentColor'
      />
      <path
        d='M20.08 20.1c-.95.44-2.28.44-4.67.44H8.58c-2.68 0-4.02 0-5-.62a4 4 0 0 1-1.25-1.24c-.61-.98-.61-2.32-.61-5 0-.41 0-.61.02-.81l.04-.32c.04-.2.1-.39.2-.78l.66-2.28c.74-2.57 1.14-3.96 2.04-4.79'
        stroke='currentColor'
      />
      <path
        d='M7.93 3.73q1-.04 2.4-.03h3.35c2.9 0 4.35 0 5.42.8 1.07.81 1.47 2.2 2.27 5l.65 2.28h0a8 8 0 0 1 .24 1.09c.02.2.02.4.02.8v0c0 2 0 3.25-.25 4.16'
        stroke='currentColor'
      />
      <path
        d='M1.9 12.83h3.04c.68 0 1.01 0 1.34.05q.6.1 1.17.39c.3.15.57.35 1.11.76h0l.15.11c.4.3.6.44.8.56a4 4 0 0 0 1.51.5c.24.03.49.03.98.03h.95c.6 0 1.18-.2 1.65-.57'
        stroke='currentColor'
      />
      <path d='M22.1 12.83h-5.05' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
