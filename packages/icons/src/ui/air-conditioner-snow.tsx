import type { Icon } from './types'

export const IconAirConditionerSnow: Icon = ({
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
      data-slot='icon-ui-air-conditioner-snow'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M19.07 12.63h.36a2 2 0 0 0 1.83-1.84l.01-.35V6.7c0-1.89 0-2.83-.59-3.42-.58-.58-1.52-.58-3.41-.58H6.73c-1.89 0-2.83 0-3.41.58-.59.59-.59 1.53-.59 3.42v4.06a2 2 0 0 0 1.87 1.86h.52a2 2 0 0 0 1.75-1.24l.07-.21.11-.32c.15-.41.22-.62.32-.79a2 2 0 0 1 1.33-.94c.2-.04.41-.04.85-.04h4.97c.35 0 .52 0 .68.02a2 2 0 0 1 1.48 1.1c.07.15.12.32.22.65l.07.2.08.27a2 2 0 0 0 1.75 1.3z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M2.73 7.67c0-1.84 0-2.75.39-3.44a3 3 0 0 1 1.13-1.14c.7-.38 1.6-.38 3.44-.38h8.62c1.83 0 2.75 0 3.44.38a3 3 0 0 1 1.13 1.14c.39.69.39 1.6.39 3.44s0 2.75-.39 3.44a3 3 0 0 1-1.13 1.14c-.7.38-1.6.38-3.44.38H7.69c-1.83 0-2.75 0-3.44-.38a3 3 0 0 1-1.13-1.14c-.39-.69-.39-1.6-.39-3.44'
        stroke='currentColor'
      />
      <path
        d='M6.9 12.63c0-1.69 0-2.54.48-3.1l.22-.22c.56-.48 1.4-.48 3.1-.48h2.6c1.7 0 2.54 0 3.1.48l.22.22c.48.56.48 1.41.48 3.1'
        stroke='currentColor'
      />
      <path d='M7.58 5.85h8.84' stroke='currentColor' />
      <path d='M7.5 21.42v-5.69' stroke='currentColor' />
      <path d='M16.5 21.42v-5.69' stroke='currentColor' />
      <path d='m4.8 20.13 5.4-3.11' stroke='currentColor' />
      <path d='m13.8 20.13 5.4-3.11' stroke='currentColor' />
      <path d='m10.2 20.13-5.4-3.11' stroke='currentColor' />
      <path d='m19.2 20.13-5.4-3.11' stroke='currentColor' />
    </svg>
  )
}
