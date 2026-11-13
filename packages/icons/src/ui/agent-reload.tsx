import type { Icon } from './types'

export const IconAgentReload: Icon = ({
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
      data-slot='icon-ui-agent-reload'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M21.25 5.57V6.7c0 1.05 0 1.57-.32 1.9-.33.33-.85.33-1.9.33H17.9'
        stroke='currentColor'
      />
      <path
        d='M19.02 17.8a9.17 9.17 0 1 1-7.1-14.97c5.06 0 7.4 4.03 8.45 5.46'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M21.25 12a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0m-13.24-.2a2 2 0 0 1 2.03-2l4.02.05a2 2 0 0 1 1.98 2v2.22a2 2 0 0 1-2.03 2L10 16.02a2 2 0 0 1-1.98-2z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M10.62 12.08v1.16' stroke='currentColor' />
      <path d='M13.5 12.08v1.16' stroke='currentColor' />
      <path d='M16.37 13.05h1.13' stroke='currentColor' />
      <path d='M6.5 13.05h1.13' stroke='currentColor' />
      <path
        d='M12.15 9.67c0-.8 0-1.2-.22-1.47l-.16-.16c-.27-.22-.68-.22-1.48-.22'
        stroke='currentColor'
      />
      <path
        d='M11.07 16.18h1.86c1.17 0 1.76 0 2.2-.24a2 2 0 0 0 .82-.81c.23-.45.23-1.03.23-2.2v0c0-1.18 0-1.76-.23-2.2a2 2 0 0 0-.82-.82c-.44-.24-1.03-.24-2.2-.24h-1.86c-1.17 0-1.76 0-2.2.24a2 2 0 0 0-.82.82c-.23.44-.23 1.02-.23 2.2v0c0 1.17 0 1.75.23 2.2a2 2 0 0 0 .82.81c.44.24 1.03.24 2.2.24'
        stroke='currentColor'
      />
    </svg>
  )
}
