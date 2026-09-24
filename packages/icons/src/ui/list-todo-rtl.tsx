import type { Icon } from './types'

export const IconListTodoRtl: Icon = ({
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
      data-slot='icon-ui-list-todo-rtl'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12.46 6H2.65' stroke='currentColor' />
      <path d='M12.46 12H2.65' stroke='currentColor' />
      <path d='M12.46 18H2.65' stroke='currentColor' />
      <path
        d='m16.23 7.21.88 1.08c.36.44.54.66.78.66s.41-.22.77-.67l2.72-3.35'
        stroke='currentColor'
      />
      <rect
        opacity='.2'
        width='5.15'
        height='5.15'
        rx='1.5'
        transform='matrix(0 -1 -1 0 21.38 18.04)'
        fill='currentColor'
      />
      <rect
        width='5.15'
        height='5.15'
        rx='1.5'
        transform='matrix(0 -1 -1 0 21.38 18.04)'
        stroke='currentColor'
      />
    </svg>
  )
}
