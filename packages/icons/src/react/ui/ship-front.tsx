import type { Icon } from './types'

export const IconShipFront: Icon = ({
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
      data-slot='icon-ui-ship-front'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' fill='currentColor' d='M6.14 4.59h11.65v5.67H6.14z' />
      <path
        d='M18.36 10.87V8.22c0-1.89 0-2.83-.59-3.42-.58-.58-1.53-.58-3.41-.58H9.64c-1.88 0-2.83 0-3.41.58-.59.59-.59 1.53-.59 3.42v2.65'
        stroke='currentColor'
      />
      <path
        d='M17.76 21.9s1.18-1.92 2.05-4.24c.24-.63.46-1.39.65-2.14.4-1.55.59-2.32.2-3.02-.4-.7-1.2-.94-2.82-1.44L13.2 9.6a4 4 0 0 0-1.2-.27c-.3 0-.6.1-1.19.28l-4.73 1.47c-1.6.5-2.4.74-2.78 1.45-.39.7-.2 1.44.2 2.91a12 12 0 0 0 2.47 4.87'
        stroke='currentColor'
      />
      <path d='M12 4.22V1.75' stroke='currentColor' />
      <path d='M12 14.3V9.6' stroke='currentColor' />
      <path
        d='M2.47 21.93a11.3 11.3 0 0 1 5.6-1.3c2.8 0 6.15 1.67 8.87 1.67 2.73 0 3.99-.9 4.52-1.4'
        stroke='currentColor'
      />
    </svg>
  )
}
