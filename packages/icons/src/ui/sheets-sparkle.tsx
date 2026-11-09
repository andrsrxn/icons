import type { Icon } from './types'

export const IconSheetsSparkle: Icon = ({
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
      data-slot='icon-ui-sheets-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.44 2.76c.52 0 .78 0 .99.1a1 1 0 0 1 .47.47c.1.2.1.47.1.99v15.36c0 .52 0 .78-.1.99a1 1 0 0 1-.47.48c-.2.1-.47.1-.99.1-1.57 0-2.35 0-2.96-.3a3 3 0 0 1-1.43-1.43c-.3-.6-.3-1.4-.3-2.96V7.44c0-1.57 0-2.35.3-2.96a3 3 0 0 1 1.43-1.44c.6-.28 1.4-.28 2.96-.28'
        fill='currentColor'
      />
      <path
        d='M21.24 12v-1.24c0-3.77 0-5.66-1.17-6.83S17 2.76 13.24 2.76h-2.48c-3.77 0-5.66 0-6.83 1.17S2.76 7 2.76 10.76v2.48c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h1.62'
        stroke='currentColor'
      />
      <path d='M21 9.14H3' stroke='currentColor' />
      <path d='M12.35 15.1H3' stroke='currentColor' />
      <path d='M9.02 3.12v18' stroke='currentColor' />
      <path
        opacity='.2'
        d='m19.55 17.02-1.08-2.04-1.1 2.04-2.09 1.16 2.1 1.07 1.09 2.39 1.08-2.39 2.27-1.18z'
        fill='currentColor'
      />
      <path d='M18.62 14.54c0 1.84-1.99 3.83-3.83 3.83' stroke='currentColor' />
      <path d='M18.62 14.54c0 1.84 1.99 3.83 3.82 3.83' stroke='currentColor' />
      <path d='M18.62 22.2c0-1.8-2-3.83-3.83-3.83' stroke='currentColor' />
      <path d='M18.62 22.2c0-1.83 2-3.83 3.82-3.83' stroke='currentColor' />
    </svg>
  )
}
