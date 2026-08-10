import type { Icon } from './types'

export const IconVideoFilled: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='video-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M15.12 13.37v-2.74q.02-1.35-.08-2.25a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.64-.72q-.9-.1-2.25-.08H7.53q-1.35-.02-2.25.08c-.62.08-1.2.27-1.65.72a2.7 2.7 0 0 0-.72 1.65c-.08.6-.08 1.35-.08 2.25v2.74c0 .9 0 1.65.08 2.25.08.63.27 1.2.72 1.65a2.7 2.7 0 0 0 1.65.72q.9.1 2.25.08h2.89q1.35.02 2.25-.08a2.7 2.7 0 0 0 1.64-.72c.46-.46.65-1.02.73-1.65q.1-.9.08-2.25m6.05.13q.01.82-.04 1.38c-.03.32-.11.68-.35.99l-.1.12q-.36.35-.83.48c-.44.11-.86-.02-1.2-.17q-.48-.23-1.16-.63l-.05-.03-.07-.04a3 3 0 0 1-.8-.61q-.16-.2-.25-.41a3 3 0 0 1-.12-1v-3.13c0-.32 0-.67.12-1q.09-.21.24-.4c.2-.28.51-.45.8-.62l.12-.07q.68-.42 1.16-.64c.3-.13.65-.25 1.04-.2l.16.03.12.03q.4.14.71.44c.32.33.42.75.46 1.12q.05.56.04 1.37z'
        fill='currentColor'
      />
    </svg>
  )
}
