import type { Icon } from './types'

export const IconDoor: Icon = ({
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
      data-slot='icon-ui-door'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' fill='currentColor' d='M5.11 2.68h13.77v18.7H5.11z' />
      <path
        d='M18.89 21.12V6.68c0-1.88 0-2.83-.59-3.41-.58-.59-1.53-.59-3.41-.59H9.1c-1.88 0-2.83 0-3.41.59-.59.58-.59 1.53-.59 3.41v14.44'
        stroke='currentColor'
      />
      <path d='M21.18 21.39H2.82' stroke='currentColor' />
      <path d='M13.02 12h3.01' stroke='currentColor' />
    </svg>
  )
}
