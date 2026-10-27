import type { Icon } from './types'

export const IconTableSparkle: Icon = ({
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
      data-slot='icon-ui-table-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.56 2.76c1.57 0 2.35 0 2.96.29a3 3 0 0 1 1.43 1.43c.3.6.3 1.4.3 2.96 0 .52 0 .78-.1.99a1 1 0 0 1-.48.47c-.2.1-.47.1-.99.1H4.32c-.52 0-.78 0-.99-.1a1 1 0 0 1-.48-.47c-.1-.2-.1-.47-.1-.99 0-1.57 0-2.35.3-2.96a3 3 0 0 1 1.43-1.43c.6-.3 1.4-.3 2.96-.3z'
        fill='currentColor'
      />
      <path
        d='M12 21.24H8.76c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.76c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h6.48c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v2.97'
        stroke='currentColor'
      />
      <path d='M21 8.38H3' stroke='currentColor' />
      <path d='M14.03 14.8H3' stroke='currentColor' />
      <path d='M12 8.38v12.86' stroke='currentColor' />
      <path
        opacity='.2'
        d='m19.65 16.92-1.03-1.94-1.04 1.94-1.99 1.1 1.99 1.02 1.04 2.27 1.03-2.27 2.15-1.12z'
        fill='currentColor'
      />
      <path d='M18.7 14.08c0 1.84-1.98 3.84-3.83 3.84' stroke='currentColor' />
      <path d='M18.7 14.08c0 1.84 1.99 3.84 3.83 3.84' stroke='currentColor' />
      <path d='M18.7 21.75c0-1.8-2-3.83-3.83-3.83' stroke='currentColor' />
      <path d='M18.7 21.75c0-1.83 2.01-3.83 3.83-3.83' stroke='currentColor' />
    </svg>
  )
}
