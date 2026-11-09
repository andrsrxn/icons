import type { Icon } from './types'

export const IconCertificate: Icon = ({
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
      data-slot='icon-ui-certificate'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M10.67 22.24c-3.3 0-4.95 0-5.98-1.03-1.02-1.02-1.02-2.67-1.02-5.97V8.7c0-3.27 0-4.9 1.01-5.93S7.33 1.73 10.6 1.7l2.7-.03.35.03c2.76.24 4.14.35 5.04 1.23.9.89 1.05 2.26 1.33 5.02l.06.54v6.87l-3.24-2.18-2.79 2.6 1.26 3.38-.68 3.07z'
        fill='currentColor'
      />
      <path
        d='M20.08 11.05V9.78c0-3.77 0-5.65-1.17-6.83s-3.06-1.17-6.83-1.17h-.41c-3.77 0-5.66 0-6.83 1.17-1.17 1.18-1.17 3.06-1.17 6.83v5.45c0 2.81 0 4.22.68 5.23a4 4 0 0 0 1.1 1.1c1 .68 2.4.68 5.22.68'
        stroke='currentColor'
      />
      <path
        d='m15.07 19.16-.43 1.8c-.18.76-.28 1.14-.06 1.34.21.2.58.08 1.33-.15l.8-.25q.2-.07.3-.07c.07 0 .14.02.3.07l.78.25c.75.23 1.13.35 1.34.15s.12-.58-.06-1.34l-.44-1.8'
        stroke='currentColor'
      />
      <path d='M19.84 16.33a2.83 2.83 0 1 1-5.67 0 2.83 2.83 0 0 1 5.67 0' stroke='currentColor' />
      <path d='M12.98 10.03H7.66' stroke='currentColor' />
      <path d='M16.34 6.05H7.66' stroke='currentColor' />
    </svg>
  )
}
