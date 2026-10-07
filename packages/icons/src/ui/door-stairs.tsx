import type { Icon } from './types'

export const IconDoorStairs: Icon = ({
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
      data-slot='icon-ui-door-stairs'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.11 2.68H18.9v3.88l-4.17.58v4.62l-2.67.35v4.27L9.17 17v4.39H5.1z'
        fill='currentColor'
      />
      <path
        d='M18.89 21.12V6.68c0-1.88 0-2.83-.59-3.41-.58-.59-1.53-.59-3.41-.59H9.1c-1.88 0-2.83 0-3.41.59-.59.58-.59 1.53-.59 3.41v14.44'
        stroke='currentColor'
      />
      <path d='M21.18 21.39H2.82' stroke='currentColor' />
      <path
        d='M8.49 21.39v-.92c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58h6.4'
        stroke='currentColor'
      />
      <path
        d='M11.46 16.47v-.93c0-1.88 0-2.82.58-3.4.59-.6 1.53-.6 3.42-.6h3.43'
        stroke='currentColor'
      />
      <path
        d='M14.38 11.54v-.92c0-1.88 0-2.83.59-3.41s1.53-.59 3.41-.59h.5'
        stroke='currentColor'
      />
    </svg>
  )
}
