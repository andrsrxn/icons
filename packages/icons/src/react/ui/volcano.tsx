import type { Icon } from './types'

export const IconVolcano: Icon = ({
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
      data-slot='icon-ui-volcano'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m6.85 11.98 4.68-.58 2.55 1.24 2.72-.66 1.85 4.75 2.48 5.26H2.91l2.53-5z'
        fill='currentColor'
      />
      <path
        d='M16.88 11.87s-1.48.93-2.79.93c-1.45 0-2.3-1.1-3.73-1.1a10 10 0 0 0-3.45.85'
        stroke='currentColor'
      />
      <path d='M12 1.5v3.06' stroke='currentColor' />
      <path d='M7.28 1.65c.33.2.9.74 1.2 1.39.26.61.3 1.26.23 1.7' stroke='currentColor' />
      <path d='M16.72 1.67c-.34.2-.92.71-1.21 1.36a3 3 0 0 0-.27 1.7' stroke='currentColor' />
      <path
        d='M8.98 22.18h6.2c3.32 0 4.98 0 5.56-.98.59-.97-.26-2.56-1.96-5.74l-.16-.3a71 71 0 0 1-2.23-5.02c-.51-1.25-.77-1.88-1.28-2.22-.5-.34-1.17-.34-2.5-.34h-1.17c-1.34 0-2.02 0-2.52.34-.51.35-.77.99-1.28 2.27h0a64 64 0 0 1-2.28 5.18c-1.71 3.25-2.57 4.87-1.98 5.84s2.25.97 5.6.97'
        stroke='currentColor'
      />
    </svg>
  )
}
