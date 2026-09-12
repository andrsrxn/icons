import type { Icon } from './types'

export const IconListCollapse: Icon = ({
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
      data-slot='icon-ui-list-collapse'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.27 5.94H2.73' stroke='currentColor' />
      <path d='M10.8 12H2.73' stroke='currentColor' />
      <path d='M10.8 18.05H2.73' stroke='currentColor' />
      <path
        d='m14.37 10.78.48.49c1.33 1.33 2 2 2.83 2s1.5-.67 2.83-2l.49-.49'
        stroke='currentColor'
      />
      <path
        d='m14.37 19.24.48-.48c1.33-1.34 2-2 2.83-2s1.5.66 2.83 2l.49.48'
        stroke='currentColor'
      />
    </svg>
  )
}
