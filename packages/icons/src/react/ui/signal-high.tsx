import type { Icon } from './types'

export const IconSignalHigh: Icon = ({
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
      data-slot='icon-ui-signal-high'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.78 18.55c-.53-.7-.8-1.06-.76-1.44l.02-.12c.08-.38.44-.63 1.15-1.15l10.9-7.9c1.38-1 2.08-1.5 2.62-1.22.55.28.55 1.13.55 2.85v7.75c0 .94 0 1.42-.3 1.7-.29.3-.76.3-1.7.3H4.32c-.46 0-.68 0-.88-.09l-.06-.03c-.2-.1-.33-.29-.6-.65'
        fill='currentColor'
      />
      <path
        d='m16.02 6.58-8.15 5.5c-4.42 3-6.63 4.5-6.2 5.9.44 1.42 3.1 1.42 8.45 1.42h8.14c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41V9.9c0-3.32 0-4.98-1.06-5.54-1.06-.57-2.44.36-5.18 2.22'
        stroke='currentColor'
      />
      <path d='M7.1 12.66v6.74' stroke='currentColor' />
      <path d='M12.2 9.67v9.73' stroke='currentColor' />
      <path d='M17.28 5.8v13.6' stroke='currentColor' />
    </svg>
  )
}
