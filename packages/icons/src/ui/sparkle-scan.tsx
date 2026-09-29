import type { Icon } from './types'

export const IconSparkleScan: Icon = ({
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
      data-slot='icon-ui-sparkle-scan'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M15.93 21.32c2.27 0 3.4 0 4.2-.57a3 3 0 0 0 .64-.65c.58-.8.58-1.93.58-4.2'
        stroke='currentColor'
      />
      <path
        d='M15.97 2.71c2.23 0 3.35 0 4.13.56a3 3 0 0 1 .69.69c.56.78.56 1.9.56 4.14'
        stroke='currentColor'
      />
      <path
        d='M8.07 21.32c-2.27 0-3.4 0-4.2-.58a3 3 0 0 1-.64-.64c-.58-.8-.58-1.93-.58-4.2'
        stroke='currentColor'
      />
      <path
        d='M8.07 2.71c-2.27 0-3.4 0-4.2.58a3 3 0 0 0-.64.65c-.58.79-.58 1.92-.58 4.2'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M13.54 9.77 11.75 6.4l-1.8 3.37-3.45 1.9 3.45 1.78 1.8 3.94 1.8-3.94 3.74-1.95z'
        fill='currentColor'
      />
      <path d='M5.68 12C8.73 12 12 8.7 12 5.68' stroke='currentColor' />
      <path d='M18.32 12C15.28 12 12 8.72 12 5.68' stroke='currentColor' />
      <path d='M5.68 12C8.71 12 12 15.34 12 18.32' stroke='currentColor' />
      <path d='M18.32 12c-3 0-6.32 3.3-6.32 6.32' stroke='currentColor' />
    </svg>
  )
}
