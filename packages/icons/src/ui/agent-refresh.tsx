import type { Icon } from './types'

export const IconAgentRefresh: Icon = ({
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
      data-slot='icon-ui-agent-refresh'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.6 12.07a9.4 9.4 0 1 0 18.8 0 9.4 9.4 0 0 0-18.8 0m7.45-2.34a2 2 0 0 0-2 2v2.12c0 1.1.9 2 2 2h3.86a2 2 0 0 0 2-2v-2.12a2 2 0 0 0-2-2z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M3.54 15.96c1.92 3.4 4.63 5.49 8.93 5.49s7.13-3.06 8.3-5.49' stroke='currentColor' />
      <path
        d='M20.7 8.17c-1.92-3.4-5.1-5.48-8.93-5.48-4.15 0-6.87 2.76-8.56 5.48'
        stroke='currentColor'
      />
      <path
        d='M18.13 9h1.1c1.02 0 1.53 0 1.84-.32.32-.31.32-.82.32-1.84v-1.1'
        stroke='currentColor'
      />
      <path
        d='M2.6 18.25v-1.1c0-1.01 0-1.52.3-1.83.32-.32.83-.32 1.85-.32h.7'
        stroke='currentColor'
      />
      <path d='M10.62 11.87v1.16' stroke='currentColor' />
      <path d='M13.5 11.87v1.16' stroke='currentColor' />
      <path d='M16.37 12.83h1.13' stroke='currentColor' />
      <path d='M6.5 12.83h1.13' stroke='currentColor' />
      <path
        d='M12.15 9.45c0-.8 0-1.2-.22-1.47l-.16-.16c-.27-.22-.68-.22-1.48-.22'
        stroke='currentColor'
      />
      <path
        d='M11.07 15.96h1.86c1.17 0 1.76 0 2.2-.24a2 2 0 0 0 .82-.81c.23-.44.23-1.03.23-2.2v0c0-1.17 0-1.76-.23-2.2a2 2 0 0 0-.82-.82c-.44-.24-1.03-.24-2.2-.24h-1.86c-1.17 0-1.76 0-2.2.24a2 2 0 0 0-.82.82c-.23.44-.23 1.03-.23 2.2v0c0 1.17 0 1.76.23 2.2a2 2 0 0 0 .82.81c.44.24 1.03.24 2.2.24'
        stroke='currentColor'
      />
    </svg>
  )
}
