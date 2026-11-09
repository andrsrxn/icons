import type { Icon } from './types'

export const IconFileReference: Icon = ({
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
      data-slot='icon-ui-file-reference'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.09 11.27c-.1-.48-.16-.72-.26-.94a2 2 0 0 0-.25-.38 4 4 0 0 0-.74-.64l-.08-.06a4 4 0 0 1-1.13-1.03l-.16-.32c-.13-.35-.13-.74-.13-1.53V5.5c0-1.1 0-1.66.21-2.09a2 2 0 0 1 .87-.87c.42-.22.98-.23 2.08-.24h1.3a2 2 0 0 1 1.93 2.1v.18a2 2 0 0 0 1.92 1.92h.78a2 2 0 0 1 1.8 1.8v1.92c0 1.64 0 2.46-.45 3.01a2 2 0 0 1-.31.31c-.56.44-1.38.43-3.02.4l-1.13-.02c-1.03-.01-1.54-.02-1.96-.23a2 2 0 0 1-.66-.54c-.29-.37-.4-.87-.61-1.88'
        fill='currentColor'
      />
      <path
        d='M19 17.68v.29c0 1.63 0 2.44-.45 2.99a2 2 0 0 1-.3.3c-.54.44-1.36.44-2.98.44'
        stroke='currentColor'
      />
      <path
        d='M21 18.35c-.88-.88-1.32-1.33-1.86-1.38h-.28c-.54.05-.98.5-1.86 1.38'
        stroke='currentColor'
      />
      <path
        d='M8.6 7.37v.25c-.01 1.89-.01 2.83.57 3.42.59.58 1.53.58 3.42.58h.26'
        stroke='currentColor'
      />
      <path
        d='M16.37 2.54v.25c0 1.89 0 2.83.58 3.42.59.59 1.53.59 3.42.59h.26'
        stroke='currentColor'
      />
      <path
        d='m11.68 9.03-.6-.5a5 5 0 0 0-1.45-1.01c-.42-.15-.87-.15-1.77-.15h-.1c-2.35 0-3.53 0-4.26.73s-.73 1.9-.73 4.27v1.39c0 2.36 0 3.53.73 4.27s1.91.73 4.27.73h.9c2.35 0 3.53 0 4.26-.73.73-.74.73-1.91.73-4.27v-.73c0-1.16 0-1.75-.24-2.25-.24-.51-.69-.88-1.6-1.62z'
        stroke='currentColor'
      />
      <path
        d='M13.86 14h2.37c2.36 0 3.54 0 4.27-.73s.73-1.91.73-4.27v-.96c0-1.15 0-1.72-.23-2.22s-.68-.88-1.56-1.61l-.2-.17-.59-.5c-.7-.6-1.04-.9-1.46-1.05s-.88-.16-1.8-.16c-2.4 0-3.59 0-4.32.73-.73.74-.73 1.91-.73 4.27v.42'
        stroke='currentColor'
      />
    </svg>
  )
}
