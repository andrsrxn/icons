import type { Icon } from './types'

export const IconAgentScan: Icon = ({
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
      data-slot='icon-ui-agent-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M10.28 11.54v1.68' stroke='currentColor' />
      <path d='M13.89 11.54v1.68' stroke='currentColor' />
      <path d='M17.47 12.98h1.42' stroke='currentColor' />
      <path d='M5.11 12.98h1.42' stroke='currentColor' />
      <path
        d='M12.19 8.75c0-.76 0-1.14-.14-1.44a1.5 1.5 0 0 0-.74-.74c-.3-.14-.68-.14-1.45-.14'
        stroke='currentColor'
      />
      <path
        d='M10.84 16.9h2.32c1.47 0 2.2 0 2.76-.3a2.5 2.5 0 0 0 1.02-1.02c.3-.55.3-1.29.3-2.76v0c0-1.47 0-2.2-.3-2.75a2.5 2.5 0 0 0-1.02-1.02c-.56-.3-1.29-.3-2.76-.3h-2.32c-1.47 0-2.2 0-2.76.3a2.5 2.5 0 0 0-1.02 1.02c-.3.55-.3 1.28-.3 2.75v0c0 1.47 0 2.2.3 2.76q.37.65 1.02 1.02c.56.3 1.29.3 2.76.3'
        stroke='currentColor'
      />
      <path
        d='M15.91 21.27c1.76 0 2.64 0 3.33-.3a3.5 3.5 0 0 0 1.75-1.76c.31-.68.31-1.56.31-3.33'
        stroke='currentColor'
      />
      <path
        d='M15.95 2.76c1.72 0 2.59 0 3.26.3.8.35 1.44.99 1.8 1.79.3.67.3 1.54.3 3.27'
        stroke='currentColor'
      />
      <path
        d='M8.1 21.27c-1.77 0-2.65 0-3.34-.3a3.5 3.5 0 0 1-1.75-1.76c-.31-.68-.31-1.57-.31-3.33h0'
        stroke='currentColor'
      />
      <path
        d='M8.1 2.76c-1.77 0-2.65 0-3.34.3a3.5 3.5 0 0 0-1.75 1.76c-.31.69-.31 1.57-.31 3.34h0'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.26 2.71c3.3 0 4.95 0 5.98 1.03 1.02 1.02 1.02 2.67 1.02 5.97v4.58c0 3.3 0 4.95-1.02 5.97-1.03 1.03-2.68 1.03-5.98 1.03H9.7c-3.3 0-4.95 0-5.97-1.03-1.03-1.02-1.03-2.67-1.03-5.97V9.7c0-3.3 0-4.95 1.03-5.97C4.74 2.7 6.39 2.7 9.69 2.7zM7.65 9.74c-.33.3-.49.44-.57.64-.09.19-.09.4-.09.84v3.35c0 .4 0 .61.08.8.07.18.22.32.5.61l.27.27c.29.29.43.43.62.5.18.08.39.08.8.08h5.73c.48 0 .72 0 .93-.1s.36-.3.66-.68l.08-.11c.2-.27.3-.4.36-.56s.05-.32.05-.66v-3.54c0-.41 0-.62-.08-.8a2 2 0 0 0-.53-.63l-.16-.16a3 3 0 0 0-.6-.49c-.19-.07-.39-.07-.79-.07h-5.7c-.4 0-.58 0-.76.07-.17.07-.31.2-.6.45z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
