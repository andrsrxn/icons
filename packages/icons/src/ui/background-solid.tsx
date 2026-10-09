import type { Icon } from './types'

export const IconBackgroundSolid: Icon = ({
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
      data-slot='icon-ui-background-solid'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12.24 5.9c2.83 0 4.25 0 5.12.89.88.87.88 2.29.88 5.12v2.18c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58h-4.4c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42v-2.18c0-2.83 0-4.25.87-5.12.88-.88 2.3-.88 5.13-.88z'
        fill='currentColor'
      />
      <rect
        width='18.48'
        height='18.48'
        rx='3'
        transform='scale(1 -1)rotate(90 21.24 0)'
        stroke='currentColor'
      />
      <rect
        width='12.19'
        height='12.19'
        rx='2'
        transform='matrix(0 -1 -1 0 18.1 18.1)'
        stroke='currentColor'
      />
    </svg>
  )
}
