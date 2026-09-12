import type { Icon } from './types'

export const IconSignalMedium: Icon = ({
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
      data-slot='icon-ui-signal-medium'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.78 18.53c-.53-.71-.79-1.07-.75-1.45l.01-.1c.07-.37.43-.64 1.14-1.17l5.75-4.3c1.4-1.04 2.1-1.56 2.65-1.28.55.27.55 1.14.55 2.88v4.2c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-5.8c-.45 0-.69 0-.89-.1l-.05-.02c-.2-.1-.33-.3-.6-.66'
        fill='currentColor'
      />
      <path
        d='m16 6.6-8.1 5.47c-4.42 2.99-6.63 4.49-6.2 5.9s3.1 1.41 8.44 1.41h8.1c1.88 0 2.83 0 3.41-.58.59-.59.59-1.53.59-3.42V9.91c0-3.31 0-4.97-1.07-5.54-1.06-.56-2.43.37-5.17 2.22'
        stroke='currentColor'
      />
      <path d='M7.1 12.66v6.72' stroke='currentColor' />
      <path d='M12.19 9.68v9.7' stroke='currentColor' />
      <path d='M17.27 5.8v13.58' stroke='currentColor' />
    </svg>
  )
}
