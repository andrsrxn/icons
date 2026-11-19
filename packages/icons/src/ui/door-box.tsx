import type { Icon } from './types'

export const IconDoorBox: Icon = ({
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
      data-slot='icon-ui-door-box'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M5.11 2.68H18.9v10.77l-5.9.3-.43 7.64H5.1z' fill='currentColor' />
      <path
        d='M18.89 10.14V6.68c0-1.88 0-2.83-.59-3.41-.58-.59-1.53-.59-3.41-.59H9.1c-1.88 0-2.83 0-3.41.59-.59.58-.59 1.53-.59 3.41v14.44'
        stroke='currentColor'
      />
      <path d='M21.18 21.39H2.82' stroke='currentColor' />
      <path
        d='M15.64 21.39h1.85c1.42 0 2.12 0 2.56-.44s.44-1.15.44-2.56v-1.86c0-1.41 0-2.12-.44-2.56s-1.14-.44-2.56-.44h-1.85c-1.42 0-2.12 0-2.56.44s-.44 1.15-.44 2.56v1.86c0 1.41 0 2.12.44 2.56s1.14.44 2.56.44'
        stroke='currentColor'
      />
      <path d='M16.56 13.53v3.09' stroke='currentColor' />
    </svg>
  )
}
