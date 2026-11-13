import type { Icon } from './types'

export const IconSnowplow: Icon = ({
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
      data-slot='icon-ui-snowplow'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.75 9.5a2 2 0 0 0-1.9 2.02v2.42a2.5 2.5 0 0 0 1.67 2.3l.12.04h.03q.36.12.74.12h9.37a2.2 2.2 0 0 0 2.17-2.37l-.02-.22-.04-.4a2.5 2.5 0 0 0-2.14-2.08l-.4-.03-1.45-.09a5 5 0 0 1-1.08-.15 5 5 0 0 1-.77-.37l-1.32-.72c-.62-.33-.93-.5-1.27-.57-.34-.08-.69-.06-1.39-.02z'
        fill='currentColor'
      />
      <path
        d='M5.19 16.3h8.25c.54 0 .81 0 1.04-.05a2 2 0 0 0 1.49-1.5c.05-.22.05-.49.05-1.03s0-.82-.05-1.04a2 2 0 0 0-1.5-1.5c-.22-.05-.49-.05-1.03-.05h0-2.07c-.57 0-.85 0-1.12-.07l-.26-.1c-.25-.1-.47-.29-.91-.65a4 4 0 0 0-.91-.66l-.26-.09c-.27-.08-.56-.08-1.12-.08h-1.6c-1.32 0-1.98 0-2.46.3a2 2 0 0 0-.65.65c-.3.49-.3 1.15-.3 2.46 0 1.32 0 1.98.3 2.46a2 2 0 0 0 .65.65c.48.3 1.14.3 2.46.3'
        stroke='currentColor'
      />
      <path
        d='M4.38 9.22V6.54c0-1.12 0-1.68.22-2.1a2 2 0 0 1 .88-.88c.43-.22.98-.22 2.1-.22s1.67 0 2.16.18a3 3 0 0 1 1.15.74c.36.37.6.88 1.06 1.9L14.14 11'
        stroke='currentColor'
      />
      <path
        d='M1.97 18.53c0-1.18.96-2.13 2.13-2.13h9.6c1.18 0 2.13.95 2.13 2.13v0c0 1.18-.95 2.13-2.13 2.13H4.1a2.13 2.13 0 0 1-2.13-2.13'
        stroke='currentColor'
      />
      <path d='M19.5 15.07h-3.48' stroke='currentColor' />
      <path
        d='M22.22 9.48c-.68 0-1.01 0-1.29.08a2 2 0 0 0-1.36 1.36c-.08.27-.08.61-.08 1.29v5.72a5 5 0 0 0 .08 1.3 2 2 0 0 0 1.36 1.35 5 5 0 0 0 1.29.08'
        stroke='currentColor'
      />
    </svg>
  )
}
