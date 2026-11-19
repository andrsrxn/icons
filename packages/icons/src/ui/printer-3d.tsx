import type { Icon } from './types'

export const IconPrinter3d: Icon = ({
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
      data-slot='icon-ui-printer-3d'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.9 7.94c0-.85 0-1.28-.24-1.56l-.1-.1c-.28-.24-.7-.24-1.56-.24-.85 0-1.28 0-1.56.24l-.1.1c-.25.28-.25.71-.25 1.56v1.33c0 .85 0 1.28.25 1.56l.1.1c.28.25.7.25 1.56.25.85 0 1.28 0 1.56-.24l.1-.1c.25-.29.25-.72.25-1.57z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.93 19.52c0-.95 0-1.42-.29-1.72-.3-.29-.76-.29-1.7-.29h-1.87c-.95 0-1.42 0-1.71.3-.3.29-.3.76-.3 1.7 0 .95 0 1.43.3 1.72s.76.3 1.7.3h1.87c.95 0 1.42 0 1.71-.3s.3-.77.3-1.71'
        fill='currentColor'
      />
      <path
        d='M14.25 21.27h-4.5c-3.3 0-4.95 0-5.97-1.02-1.03-1.03-1.03-2.68-1.03-5.98v-4.5c0-3.3 0-4.95 1.03-5.97C4.8 2.77 6.45 2.77 9.75 2.77h4.5c3.3 0 4.95 0 5.97 1.03 1.03 1.02 1.03 2.67 1.03 5.97v4.5c0 3.3 0 4.95-1.03 5.98-1.02 1.02-2.67 1.02-5.97 1.02'
        stroke='currentColor'
      />
      <path
        d='M12 11.18c-.85 0-1.28 0-1.56-.24l-.1-.1c-.25-.29-.25-.72-.25-1.57v-1.3c0-.86 0-1.29.25-1.57l.1-.1c.28-.24.7-.24 1.56-.24v0c.85 0 1.28 0 1.56.24l.1.1c.25.28.25.71.25 1.56v1.31c0 .85 0 1.28-.25 1.56l-.1.1c-.28.25-.7.25-1.56.25'
        stroke='currentColor'
      />
      <path
        d='M9.07 21.24V19.5c0-.94 0-1.41.29-1.7.3-.3.76-.3 1.7-.3h1.87c.95 0 1.42 0 1.71.3.3.29.3.76.3 1.7v1.73'
        stroke='currentColor'
      />
      <path d='M13.9 8.62h7.35' stroke='currentColor' />
      <path d='M2.75 8.62h7.34' stroke='currentColor' />
      <path d='M12 13.98v-2.8' stroke='currentColor' />
    </svg>
  )
}
