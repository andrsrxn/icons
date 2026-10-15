import type { Icon } from './types'

export const IconInboxOff: Icon = ({
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
      data-slot='icon-ui-inbox-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.3 6.04c.48-1.25.72-1.87 1.23-2.23s1.18-.35 2.51-.35h8.08c1.36 0 2.04 0 2.56.36.51.37.74 1.01 1.2 2.3l1.45 4.03c.43 1.22.65 1.83.35 2.25-.3.43-.94.43-2.23.43h-.73c-.78 0-1.17 0-1.52.14s-.64.4-1.21.93l-.27.25c-.57.53-.85.8-1.2.94-.36.14-.75.14-1.53.14H11c-.77 0-1.16 0-1.52-.14-.35-.14-.63-.4-1.2-.94L8 13.9c-.57-.53-.85-.8-1.2-.93-.36-.14-.75-.14-1.53-.14h-.66c-1.32 0-1.98 0-2.28-.44-.3-.43-.06-1.04.4-2.28z'
        fill='currentColor'
      />
      <path
        d='M3.05 8.05c.6-2.1.9-3.14 1.7-3.74s1.9-.6 4.07-.6h6.36c2.18 0 3.27 0 4.07.6s1.1 1.65 1.7 3.74l1.1 3.84c.12.4.18.61.2.82s.03.42.03.84v.99c0 2.83 0 4.24-.87 5.12-.88.88-2.3.88-5.13.88H7.72c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12v-1c0-.41 0-.62.02-.83s.1-.41.2-.82z'
        stroke='currentColor'
      />
      <path
        d='M22.1 12.83h-3.06c-.97 0-1.46 0-1.92.15l-.04.01a7 7 0 0 0-1.62 1.04l-.09.07c-.68.52-1.03.78-1.42.93l-.25.08c-.4.12-.84.12-1.7.12-.82 0-1.23 0-1.62-.1l-.3-.1c-.38-.15-.7-.4-1.37-.89l-.17-.13c-.79-.58-1.18-.88-1.64-1.03s-.95-.15-1.94-.15H1.9'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
