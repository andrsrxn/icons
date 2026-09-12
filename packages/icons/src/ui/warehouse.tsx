import type { Icon } from './types'

export const IconWarehouse: Icon = ({
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
      data-slot='icon-ui-warehouse'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M17.15 21.18v-5.93c0-1.88 0-2.83-.59-3.41-.58-.59-1.53-.59-3.41-.59h-2.3c-1.88 0-2.83 0-3.41.59-.59.58-.59 1.53-.59 3.41v5.93'
        stroke='currentColor'
      />
      <path d='M6.85 14.9h10.3' stroke='currentColor' />
      <path d='M6.85 18.46h10.3' stroke='currentColor' />
      <path
        opacity='.2'
        d='M3.32 18.85c-.02.6-.03.89.1 1.13l.1.14c.16.21.44.32.99.54 1.05.41 1.58.62 1.98.42l.2-.14c.34-.3.35-.86.37-2l.09-5.53c.01-.92.02-1.38.3-1.67.3-.28.76-.29 1.68-.3l2.9-.03 2.87.03c.93.01 1.4.02 1.69.31.29.3.29.76.29 1.7v5.42c0 1.2 0 1.8.36 2.1l.14.1c.4.23.97.02 2.1-.41.58-.22.88-.34 1.05-.57l.06-.09c.15-.25.14-.56.12-1.2l-.3-9.07c-.02-.44-.02-.67-.12-.86-.1-.2-.26-.33-.6-.62L13.3 3c-.61-.5-.92-.75-1.28-.75s-.66.25-1.27.75L4.38 8.26c-.34.28-.51.42-.6.61-.1.2-.11.41-.13.86z'
        fill='currentColor'
      />
      <path
        d='M9.28 21.55h5.44c2.83 0 4.25 0 5.12-.88s.88-2.3.88-5.12v-3.6c0-1.3 0-1.94-.25-2.5-.25-.58-.72-1.02-1.66-1.9l-2.73-2.53c-1.93-1.8-2.9-2.7-4.08-2.7s-2.15.9-4.09 2.7L5.2 7.55c-.94.88-1.41 1.32-1.66 1.9-.25.56-.25 1.2-.25 2.5v3.6c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88'
        stroke='currentColor'
      />
    </svg>
  )
}
