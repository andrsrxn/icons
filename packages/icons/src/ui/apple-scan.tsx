import type { Icon } from './types'

export const IconAppleScan: Icon = ({
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
      data-slot='icon-ui-apple-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M16 21.47c1.86 0 2.8 0 3.51-.35a3.5 3.5 0 0 0 1.64-1.63c.35-.72.35-1.66.35-3.53h0'
        stroke='currentColor'
      />
      <path
        d='M16.03 2.57c1.83 0 2.75 0 3.46.33a3.5 3.5 0 0 1 1.67 1.67c.34.71.34 1.63.34 3.47h0'
        stroke='currentColor'
      />
      <path
        d='M8 21.47c-1.86 0-2.8 0-3.51-.35a3.5 3.5 0 0 1-1.64-1.63c-.35-.72-.35-1.66-.35-3.53'
        stroke='currentColor'
      />
      <path
        d='M8 2.57c-1.86 0-2.8 0-3.51.34a3.5 3.5 0 0 0-1.64 1.64c-.35.72-.35 1.65-.35 3.52'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.5 2.48c3.3 0 4.95 0 5.97 1.02 1.03 1.03 1.03 2.68 1.03 5.98v5.04c0 3.3 0 4.95-1.03 5.98-1.02 1.02-2.67 1.02-5.97 1.02H9.46c-3.3 0-4.95 0-5.98-1.02-1.02-1.03-1.02-2.68-1.02-5.98V9.48c0-3.3 0-4.95 1.02-5.98 1.03-1.02 2.68-1.02 5.98-1.02zm2.75 10.02c.15 3.93-1.62 5.3-4.12 5.24l-1.28-.03-.98.03c-2.39.08-4.32-1.02-4.32-5.24.32-4.11 2.34-4.32 5.45-4.32 3.1 0 5.1.38 5.25 4.32'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M10.07 17.95c-2.32.12-3.39-2.67-3.39-4.91s.86-4.91 3.4-4.91c.77 0 1.07.47 1.85.47.77 0 1.07-.47 1.85-.47 2.6 0 3.39 2.66 3.39 4.9s-1.07 5.04-3.4 4.92c-.76-.04-1.2-.65-1.84-.65-.66 0-1.1.6-1.86.65'
        stroke='currentColor'
      />
      <path d='M9.25 12.9c-.04-.44.01-.8.17-1.2.19-.47.35-.67.77-.96' stroke='currentColor' />
      <path d='M11.88 8.45c-.1-.53-.1-1 .02-1.6.13-.68.74-1.37 2.11-1.08' stroke='currentColor' />
    </svg>
  )
}
