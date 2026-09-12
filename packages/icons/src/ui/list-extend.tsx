import type { Icon } from './types'

export const IconListExtend: Icon = ({
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
      data-slot='icon-ui-list-extend'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.27 5.93H2.73' stroke='currentColor' />
      <path d='M10.8 11.99H2.73' stroke='currentColor' />
      <path d='M10.8 18.04H2.73' stroke='currentColor' />
      <path d='m14.37 13 .48-.49c1.34-1.34 2-2 2.83-2s1.5.66 2.83 2L21 13' stroke='currentColor' />
      <path
        d='m14.37 17.03.48.49c1.34 1.33 2 2 2.83 2s1.5-.67 2.83-2l.49-.49'
        stroke='currentColor'
      />
    </svg>
  )
}
