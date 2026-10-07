import type { Icon } from './types'

export const IconClipboardSearch: Icon = ({
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
      data-slot='icon-ui-clipboard-search'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M8.31 22.28c-1.88 0-2.83 0-3.41-.59-.59-.58-.59-1.53-.59-3.41V5.52c0-1.03.84-1.86 1.87-1.86h.37c.5 0 .95.28 1.16.74.17.35.49.61.87.7l2.72.65c.35.08.52.12.7.13.18 0 .36-.01.71-.06l2.27-.27c.52-.07.96-.44 1.11-.94.17-.57.68-.95 1.27-.95h.43c1.05 0 1.9.85 1.9 1.9v9.3l-1.93-.23a5 5 0 0 0-.72-.06 2 2 0 0 0-1.61.97c-.09.14-.16.32-.3.66-.12.34-.19.5-.22.67a2 2 0 0 0 .5 1.78c.1.12.25.23.53.45l.38.3c.25.19.38.28.52.36a2 2 0 0 0 .43.17c.15.04.3.06.62.1l1.8.2c0 1.06-.85 1.93-1.92 1.95l-5.77.1z'
        fill='currentColor'
      />
      <path
        d='M16.88 3.66a2.8 2.8 0 0 1 2.8 2.8v4.1m-12.4-6.9a3 3 0 0 0-2.97 2.97v9.65c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h2.7'
        stroke='currentColor'
      />
      <rect
        x='7.33'
        y='5.59'
        width='3.87'
        height='9.33'
        rx='1'
        transform='rotate(-90 7.33 5.59)'
        stroke='currentColor'
      />
      <path d='m20.14 19.8 1.88 1.86' stroke='currentColor' />
      <path d='M21.04 17.31a3.2 3.2 0 0 1-3.2 3.2 3.2 3.2 0 1 1 3.2-3.2' stroke='currentColor' />
    </svg>
  )
}
