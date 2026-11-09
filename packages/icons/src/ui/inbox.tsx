import type { Icon } from './types'

export const IconInbox: Icon = ({
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
      data-slot='icon-ui-inbox'
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
        d='m22.02 11.78-.65-2.28c-.8-2.8-1.2-4.19-2.27-5s-2.52-.8-5.42-.8h-3.35c-2.9 0-4.35 0-5.42.8-1.07.81-1.47 2.2-2.27 5l-.66 2.27-.2.78-.04.32c-.02.2-.02.4-.02.8 0 2.69 0 4.03.61 5a4 4 0 0 0 1.25 1.25c.98.62 2.32.62 5 .62h6.83c2.69 0 4.03 0 5.01-.62a4 4 0 0 0 1.25-1.24c.61-.98.61-2.32.61-5.01 0-.4 0-.6-.02-.8l-.04-.32c-.04-.2-.09-.39-.2-.77'
        stroke='currentColor'
      />
      <path
        d='M1.95 12.83h3.02c.67 0 1 0 1.32.05a4 4 0 0 1 1.2.4c.3.15.56.35 1.1.75l.14.11h0c.39.29.58.43.78.55a4 4 0 0 0 1.54.51c.23.03.47.03.95.03.51 0 .77 0 1.01-.03a4 4 0 0 0 1.51-.51c.22-.13.42-.28.83-.59l.1-.07c.5-.38.75-.57 1.02-.72a4 4 0 0 1 1.3-.44c.3-.04.61-.04 1.24-.04h3.04'
        stroke='currentColor'
      />
    </svg>
  )
}
