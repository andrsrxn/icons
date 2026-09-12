import type { Icon } from './types'

export const IconHighlighter: Icon = ({
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
      data-slot='icon-ui-highlighter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m13.02 1.76 10.24 10.23-3.98 3.98a4 4 0 0 1-.51.43l-1.66 1.18c-.34.24-.51.36-.7.45-.19.08-.4.12-.8.2l-1.95.38c-.95.18-1.43.27-1.88.14s-.8-.47-1.51-1.15l-2.45-2.32c-.76-.74-1.15-1.1-1.3-1.59-.17-.49-.08-1.02.09-2.08l.1-.6c.04-.26.06-.4.1-.52.04-.13.1-.26.2-.5L8.5 6.66c.15-.34.23-.51.33-.66s.24-.29.5-.55z'
        fill='currentColor'
      />
      <path
        d='m22.84 11.72-5 5c-.26.26-.39.39-.53.5q-.56.45-1.27.6c-.17.03-.35.05-.72.08l-.87.07c-.38.04-.75.2-1.02.48-.65.65-1.68.65-2.33 0l-4.62-4.62a1.6 1.6 0 0 1 0-2.25c.3-.3.46-.71.46-1.14v-1.4a3.2 3.2 0 0 1 1.1-2.24l4.82-4.82'
        stroke='currentColor'
      />
      <path
        d='m6.39 13.92-2.87 3.23c-1.27 1.43-1.9 2.15-1.64 2.74.27.59 1.23.59 3.14.59h2.36c.31 0 .47 0 .61-.05s.28-.13.53-.31l2.39-1.65'
        stroke='currentColor'
      />
      <path d='m7.3 8.07 9.44 9.44' stroke='currentColor' />
    </svg>
  )
}
