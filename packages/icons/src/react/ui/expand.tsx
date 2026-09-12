import type { Icon } from './types'

export const IconExpand: Icon = ({
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
      data-slot='icon-ui-expand'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M15.55 2.73h1.8c1.9 0 2.84 0 3.42.58.59.59.59 1.53.59 3.42v1.8'
        stroke='currentColor'
      />
      <path
        d='M8.97 21.28H6.73c-1.9 0-2.84 0-3.42-.58-.59-.59-.59-1.53-.59-3.42v-2.25'
        stroke='currentColor'
      />
      <path d='m14.42 9.67 5.94-5.94' stroke='currentColor' />
      <path d='m9.7 14.3-5.98 5.97' stroke='currentColor' />
    </svg>
  )
}
