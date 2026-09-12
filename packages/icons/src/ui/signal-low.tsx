import type { Icon } from './types'

export const IconSignalLow: Icon = ({
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
      data-slot='icon-ui-signal-low'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.76 18.51c-.54-.72-.81-1.08-.76-1.48s.4-.69 1.1-1.26l.7-.58c1.42-1.15 2.13-1.73 2.7-1.46s.57 1.19.57 3.01v.57c0 .95 0 1.42-.3 1.71-.29.3-.76.3-1.7.3h-.71c-.49 0-.74 0-.95-.11s-.36-.3-.65-.7'
        fill='currentColor'
      />
      <path
        d='m16 6.59-8.1 5.49c-4.43 2.99-6.64 4.48-6.2 5.9.43 1.41 3.1 1.41 8.44 1.41h8.12c1.88 0 2.83 0 3.41-.58.59-.59.59-1.53.59-3.42V9.9c0-3.31 0-4.97-1.06-5.53-1.07-.57-2.44.36-5.18 2.22'
        stroke='currentColor'
      />
      <path d='M7.1 12.66v6.73' stroke='currentColor' />
      <path d='M12.19 9.68v9.71' stroke='currentColor' />
      <path d='M17.28 5.8v13.6' stroke='currentColor' />
    </svg>
  )
}
