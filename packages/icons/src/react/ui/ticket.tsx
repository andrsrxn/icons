import type { Icon } from './types'

export const IconTicket: Icon = ({
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
      data-slot='icon-ui-ticket'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M10.24 5.74v12.52' stroke='currentColor' />
      <path
        opacity='.2'
        d='M2.16 6.97c0-.76 0-1.14.2-1.4a1 1 0 0 1 .2-.22c.27-.2.65-.2 1.4-.2h4.28c.94 0 1.41 0 1.7.3s.3.77.3 1.7v9.72c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3H3.67c-.9 0-1.34 0-1.63-.27L2 18.54c-.27-.28-.27-.73-.27-1.62v-.09c0-.6 0-.91.15-1.15l.12-.17c.2-.2.49-.28 1.08-.45.45-.12.68-.19.85-.33l.12-.13c.14-.17.2-.4.31-.86l.39-1.53c.05-.24.08-.35.08-.47s-.02-.23-.07-.46L4.39 9.7l-.1-.35a1 1 0 0 0-.64-.58l-.36-.06a2 2 0 0 1-.44-.07 1 1 0 0 1-.67-.75c-.02-.1-.02-.21-.02-.44z'
        fill='currentColor'
      />
      <path
        d='M20.52 5H3.54C2.52 5 1.7 5.82 1.7 6.84v.6c0 .68.55 1.24 1.24 1.24s1.25.56 1.25 1.24v4.24c0 .69-.56 1.24-1.25 1.24s-1.24.56-1.24 1.25v.55c0 1 .8 1.8 1.8 1.8h17.04c.98 0 1.76-.79 1.76-1.76v-.51c0-.69-.56-1.25-1.24-1.25-.7 0-1.25-.56-1.25-1.25V9.8c0-.68.56-1.24 1.25-1.24S22.3 8 22.3 7.3v-.53c0-.98-.8-1.78-1.78-1.78'
        stroke='currentColor'
      />
    </svg>
  )
}
