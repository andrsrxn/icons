import type { Icon } from './types'

export const IconGhost: Icon = ({
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
      data-slot='icon-ui-ghost'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M19.87 9.48a7.87 7.87 0 0 0-15.74 0v7.72l-.73 2.45c-.29.98 0 2.04.73 2.74l2.15-.81c.8-.3 1.19-.45 1.6-.49a3 3 0 0 1 .6 0c.4.05.8.2 1.58.52.81.33 1.21.5 1.63.53q.3.03.61 0c.43-.04.83-.2 1.64-.53.78-.31 1.18-.47 1.59-.51a3 3 0 0 1 .6-.01c.4.04.8.19 1.59.49l2.15.81c.24-.33.36-.5.45-.67a3 3 0 0 0 .31-1.89c-.03-.19-.09-.39-.2-.78l-.56-1.85z'
        fill='currentColor'
      />
      <path
        d='M19.65 9.38v6.12c0 1.2.27 2.48.65 3.65.4 1.26.6 1.9.58 2.1-.07.6-.48.94-1.07.9-.21-.02-.75-.3-1.82-.88l-.36-.19-.4-.2a3 3 0 0 0-2.77.17c-.1.05-.19.12-.38.25h0l-.41.29a3 3 0 0 1-3.4-.21l-.16-.1a7 7 0 0 0-.65-.4 3 3 0 0 0-2.38-.12c-.17.07-.34.16-.68.34h0l-.33.17h0c-1.2.62-1.79.93-2.06.92a.93.93 0 0 1-.94-.8c-.05-.25.17-.94.62-2.33h0c.38-1.18.66-2.43.66-3.56V9.38a7.65 7.65 0 0 1 15.3 0'
        stroke='currentColor'
      />
      <path d='M9.57 8.7v3.19' stroke='currentColor' />
      <path d='M14.43 8.7v3.19' stroke='currentColor' />
    </svg>
  )
}
