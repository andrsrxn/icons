import type { Icon } from './types'

export const IconTextWholeWord: Icon = ({
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
      data-slot='icon-ui-text-whole-word'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M22.33 14.6v.06c0 1.88 0 2.83-.59 3.41-.58.59-1.53.59-3.41.59H5.67c-1.88 0-2.83 0-3.41-.59-.59-.58-.59-1.53-.59-3.41v-.05'
        stroke='currentColor'
      />
      <path
        d='M16.62 15c-1.22 0-2.2-.9-2.2-2 0-1.45.98-1.98 2.2-1.98h2.2v1.99c0 1.1-.99 1.98-2.2 1.98'
        stroke='currentColor'
      />
      <path
        d='M14.97 8.3c.56-.71 1.3-1.13 2.24-.95 1.47.27 1.83 1.21 1.83 2.8v3.99c0 .73.3.96.3.96'
        stroke='currentColor'
      />
      <path
        d='m4.66 15 1.72-5.83h0c.84-2.87 1.26-4.3 2.05-4.3.78.02 1.17 1.46 1.94 4.35l1.53 5.77'
        stroke='currentColor'
      />
      <path d='M6.02 11.1h4.67' stroke='currentColor' />
    </svg>
  )
}
