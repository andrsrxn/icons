import type { Icon } from './types'

export const IconInboxIn: Icon = ({
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
      data-slot='icon-ui-inbox-in'
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
        d='M17.23 3.7a3.3 3.3 0 0 1 3.16 2.39l1.63 5.69a4 4 0 0 1 .25 1.09l.01.8c0 2.69 0 4.03-.61 5a4 4 0 0 1-1.25 1.25c-.98.62-2.32.62-5 .62H8.57c-2.68 0-4.02 0-5-.62a4 4 0 0 1-1.25-1.24c-.61-.98-.61-2.32-.61-5 0-.41 0-.61.02-.81l.04-.32c.04-.2.1-.39.2-.78l1.6-5.56a3.5 3.5 0 0 1 3.33-2.5'
        stroke='currentColor'
      />
      <path
        d='M2.06 12.83h3c.66 0 1 0 1.3.05a4 4 0 0 1 1.23.4c.29.16.55.35 1.07.75l.16.11c.37.28.56.42.75.54a4 4 0 0 0 1.57.52c.23.03.46.03.93.03.5 0 .75 0 .99-.03a4 4 0 0 0 1.54-.52c.2-.12.4-.28.8-.58l.1-.07c.5-.38.74-.57 1-.71a4 4 0 0 1 1.32-.45c.3-.04.61-.04 1.23-.04h3.03'
        stroke='currentColor'
      />
      <path
        d='m8.41 6.98 2.17 2.18c.67.66 1 1 1.42 1s.74-.33 1.41-1l2.18-2.18'
        stroke='currentColor'
      />
      <path d='M12 9.54V1.85' stroke='currentColor' />
    </svg>
  )
}
