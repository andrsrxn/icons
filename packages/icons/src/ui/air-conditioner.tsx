import type { Icon } from './types'

export const IconAirConditioner: Icon = ({
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
      data-slot='icon-ui-air-conditioner'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.07 12.63h.36a2 2 0 0 0 1.83-1.84l.01-.35V6.7c0-1.89 0-2.83-.59-3.42-.58-.58-1.52-.58-3.41-.58H6.73c-1.89 0-2.83 0-3.41.58-.59.59-.59 1.53-.59 3.42v4.06a2 2 0 0 0 2.17 1.86h.22a2 2 0 0 0 1.75-1.24l.07-.21.11-.32c.15-.41.22-.62.32-.79a2 2 0 0 1 1.33-.94c.2-.04.41-.04.85-.04h4.97c.35 0 .52 0 .68.02a2 2 0 0 1 1.48 1.1c.07.15.12.32.22.65l.07.2.08.27a2 2 0 0 0 2.02 1.3'
        fill='currentColor'
      />
      <path
        d='M16.3 2.7c1.84 0 2.76 0 3.45.4a3 3 0 0 1 1.13 1.13c.39.69.39 1.6.39 3.44s0 2.75-.39 3.44a3 3 0 0 1-1.13 1.14c-.7.38-1.6.38-3.44.38H7.69c-1.83 0-2.75 0-3.44-.38a3 3 0 0 1-1.13-1.14c-.39-.69-.39-1.6-.39-3.44s0-2.75.39-3.44a3 3 0 0 1 1.13-1.14c.7-.38 1.6-.38 3.44-.38z'
        stroke='currentColor'
      />
      <path
        d='M17.1 12.63c0-1.69 0-2.54-.48-3.1l-.22-.22c-.56-.48-1.4-.48-3.1-.48h-2.6c-1.7 0-2.54 0-3.1.48l-.22.22c-.48.56-.48 1.41-.48 3.1'
        stroke='currentColor'
      />
      <path
        d='m16.97 15.65.73.74a1.5 1.5 0 0 1-.13 2.24c-.76.6-.76 1.75-.01 2.36l.64.51'
        stroke='currentColor'
      />
      <path
        d='m11.42 15.65.8.73c.68.62.62 1.71-.13 2.25-.8.58-.8 1.78 0 2.36l.7.51'
        stroke='currentColor'
      />
      <path
        d='m5.97 15.65.76.74c.65.63.58 1.7-.13 2.24-.78.6-.78 1.76-.01 2.36l.66.51'
        stroke='currentColor'
      />
      <path d='M7.58 5.85h8.84' stroke='currentColor' />
    </svg>
  )
}
